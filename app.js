const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const http         = require('http');
const socketIO 	   = require('socket.io');

const app = express();

// environment variables
const dotenv = require('dotenv');
dotenv.config();

// set up cors
const cors = require('cors');
app.use(cors());

//Setup socket IO

app.server = http.createServer(app);
const io = socketIO(app.server);
io.set('origins', '*:*');

io.on('connection', socket => {
  console.log('Socket.io: connected');
  
  socket.emit('new_connect', () =>{
    console.log('TBD: Database should send old messages related to moment to new connection.');
  });

  socket.on('message', () => {
    console.log('A message was sent by subscriber')
  });

	socket.on('disconnect', () => {
		console.log('Socket.io: disconnected')
	});
});

// connect to db
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'NBC hackacton';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

const index = require('./routes/index');
app.use('/', index);
const moment = require('./routes/moment')(io);
app.use('/', moment);
const chat = require('./routes/chat')(io);
app.use('/', chat);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

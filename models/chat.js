const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChatShema = new Schema({
    name: String,
    category: String,
    startTime: Number,
    duration: Number
},{ timestamps: { createdAt: 'created_at' } }
);

const ChatModel = mongoose.model('Chat', ChatShema);

module.exports = ChatModel;
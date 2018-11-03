const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    user: String,
    momentId: String,
    message: String
},{ timestamps: { createdAt: 'created_at' } }
);

const MessageModel = mongoose.model('Message', MessageSchema);

module.exports = MessageModel;
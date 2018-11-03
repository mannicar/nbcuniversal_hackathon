const MessageModel = require('../models/message');

class Message{

    static async getByChatId(id){

        try {
            //Get from db
            const messages = await MessageModel.find({chatId: id});

            if(!messages)
                return null; //We did not anything
            
            //send back result
            return messages;

        } catch (error) {
            console.log(error);
        }
        
    }

    static async add(user, chatId, message){

        const msg = {
            user,
            chatId,
            message
        }

        try {
            const newDocument = new MessageModel(msg);
            return newDocument.save();
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = Message;
const ChatModel = require('../models/chat');

class Chat{

    static async getAll(){

        try {
            //Get from db
            const chats = await ChatModel.find({});

            if(!chats)
                return null; //We did not anything
            
            //send back result
            return chats;

        } catch (error) {
            console.log(error);
        }
        
    }

    static async add(name, category, startTime, duration){

        const chat = {
            name,
            category,
            startTime,
            duration
        };

        try {
            const newDocument = new ChatModel(chat);
            return newDocument.save();
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = Chat;
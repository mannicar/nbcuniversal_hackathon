const MessageModel = require('../models/message');

class Chat{

    static async getByMomentId(momemntId){

        try {
            //Get from db
            const messages = await MessageModel.find({momemntId: momemntId});

            if(!messages)
                return null; //We did not anything
            
            //send back result
            return messages;

        } catch (error) {
            console.log(error);
        }
        
    }

    static async add(user, momemntId, message){

        const msg = {
            user,
            momemntId,
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

module.exports = Chat;
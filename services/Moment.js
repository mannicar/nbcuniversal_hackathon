const MomentModel = require('../models/moment');

class Moment{

    static async getAll(){

        try {
            //Get from db
            const moments = await MomentModel.find({});

            if(!moments)
                return null; //We did not anything
            
            //send back result
            return moments;

        } catch (error) {
            console.log(error);
        }
        
    }

    static async add(name, category, tsFrom, tsTo){

        const moment = {
            name,
            category,
            timeRange: {
                from: new Date(tsFrom),
                to: new Date(tsTo)
            }
        };

        try {
            const newDocument = new MomentModel(moment);
            return newDocument.save();
        } catch (error) {
            console.log(error);
        }
        
    }
}

module.exports = Moment;
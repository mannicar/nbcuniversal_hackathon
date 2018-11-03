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

    static async create(moment){

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
}

module.exports = Moment;
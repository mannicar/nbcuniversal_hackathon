const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MomentShema = new Schema({
    category: String,
    timeRange: {
        from: String,
        to: String
    }
},{ timestamps: { createdAt: 'created_at' } }
);

const MomentModel = mongoose.model('Moment', MomentShema);

module.exports = MomentModel;
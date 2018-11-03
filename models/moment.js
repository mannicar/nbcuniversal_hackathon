const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MomentShema = new Schema({
    name: String,
    category: String,
    timeRange: {
        from: Date,
        to: Date
    }
},{ timestamps: { createdAt: 'created_at' } }
);

const MomentModel = mongoose.model('Moment', MomentShema);

module.exports = MomentModel;
const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const message = new Schema({
    message: { type: String, required: true },
    from: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, default: Date.now }
});

module.exports = restful.model('Message', message);
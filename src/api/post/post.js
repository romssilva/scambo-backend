const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const post = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: {type: String, required: true },
    value: { type: String },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = restful.model('Post', post);
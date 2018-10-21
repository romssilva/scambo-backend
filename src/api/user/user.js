const restful = require('node-restful');
const mongoose = restful.mongoose;
const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, min: 6, max: 12, required: true }
});

module.exports = restful.model('User', user);
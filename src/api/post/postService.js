const Post = require('./post');
const ImageService = require('../image/imageService');

Post.methods(['get', 'post', 'put', 'delete']);
Post.updateOptions({new: true, runValidators: true});

module.exports = Post;
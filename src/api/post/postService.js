const Post = require('./post');
const ImageService = require('../image/imageService');

Post.methods(['get', 'post', 'put', 'delete']);
Post.updateOptions({new: true, runValidators: true});

// Post.route('post.delete', (req, res, next) => {
//     Post.findByIdAndRemove(req.query.post_id, (err, post) => {
//         if (err) {
//             return res.status(400).json({ err });
//         }
//         const imagesPublicIds = post.images.map(image => image.pubic_id);
//         ImageService.deleteMultipleImage(imagesPublicIds).then(value => {
//             console.log(value);
//         });
//     });
// });

module.exports = Post;
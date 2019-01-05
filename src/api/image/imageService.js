// require('dotenv').config()
const cloudinary = require('cloudinary');
const env = require('../../.env');

cloudinary.config({ 
  cloud_name: env.cloudinary.cloud_name, 
  api_key: env.cloudinary.api_key, 
  api_secret: env.cloudinary.api_secret
});

const uploadImage = (req, res) => {
  const values = Object.values(req.files);
  const promises = values.map(image => cloudinary.uploader.upload(image.path));
  
  Promise
  .all(promises)
  .then(results => res.json(results));
}

const deleteImage = (req, res) => {
  const public_id = req.body.public_id;
  
  cloudinary.uploader.destroy(public_id, (err, res) => res.json(res));
}

const deleteMultipleImage = (req, res) => {
  const publicIds = req.body.public_ids;

  cloudinary.api.delete_resources(publicIds, (err, res) => res.json(res));
}

module.exports = { uploadImage, deleteImage, deleteMultipleImage };
const express = require('express');
const auth = require('./auth');

module.exports = function(server) {

    // Open Routes

    const openApi = express.Router();
    server.use('/oapi', openApi);
    // openApi.use(auth);
    
    const UserService = require('../api/user/userService');
    UserService.register(openApi, '/user');
    
    const PostService = require('../api/post/postService');
    PostService.register(openApi, '/post');
    
    const MessageService = require('../api/message/messageService');
    MessageService.register(openApi, '/message');

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);

    const ImageService = require('../api/image/imageService');
    openApi.post('/image-upload', ImageService.uploadImage);
    openApi.delete('/image-upload', ImageService.deleteImage);
    openApi.delete('/images-upload', ImageService.deleteMultipleImage);

    // Private Routes

    // const privateApi = express.Router();
    // server.use('/api', privateApi);
    // privateApi.use(auth);
    
    // const { PrivateUserService } = require('../api/user/userService');
    // PrivateUserService.register(privateApi, '/user');
    
    // const { PrivatePostService } = require('../api/post/postService');
    // PrivatePostService.register(privateApi, '/post');
}
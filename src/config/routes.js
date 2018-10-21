const express = require('express');
const auth = require('./auth');

module.exports = function(server) {

    // Open Routes

    const openApi = express.Router();
    server.use('/oapi', openApi);
    
    const UserService = require('../api/user/userService');
    UserService.register(openApi, '/user');
    
    const PostService = require('../api/post/postService');
    PostService.register(openApi, '/post');

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);

    // Private Routes

    // const privateApi = express.Router();
    // server.use('/api', privateApi);
    // privateApi.use(auth);
    
    // const { PrivateUserService } = require('../api/user/userService');
    // PrivateUserService.register(privateApi, '/user');
    
    // const { PrivatePostService } = require('../api/post/postService');
    // PrivatePostService.register(privateApi, '/post');
}
const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);
    
    const UserService = require('../api/user/userService');
    UserService.register(router, '/user');
    
    const PostService = require('../api/post/postService');
    PostService.register(router, '/post');
}
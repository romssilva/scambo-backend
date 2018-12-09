const jwt = require('jsonwebtoken');
const env = require('../.env');

module.exports = (req, res, next) => {
    // CORS preflight request
    if (['OPTIONS', 'GET'].indexOf(req.method) > -1) {
        next();
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization'];

        if (!token) {
            return res.status(403).send({ errors: ['No token provided.'] });
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    errors: ['Failed to authenticate token.']
                });
            } else {
                next();
            }
        })
    }
}
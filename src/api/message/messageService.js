const Message = require('./message');

Message.methods(['get', 'post', 'put', 'delete']);
Message.updateOptions({new: true, runValidators: true});

Message.route('chat.get', (req, res, next) => {
    Message.find()
        .or([{ "to": req.query.user }, { "from": req.query.user }])
        .sort({ "date": "desc" })
        .populate("from to")
        .exec((err, messages) => {
        if (err) {
            return res.status(400).json({ err });
        }
        if (messages.length) {
            res.json({ messages });
        } else {
            res.send(`No messages found for ${req.query.user}`);
        }
    });
});

Message.route('chat.user.get', (req, res, next) => {
    Message.find()
        .or([
            { $and: [{"to": req.query.user}, {"from": req.query.from}] }, 
            { $and: [{"from": req.query.user}, {"to": req.query.from}] }
        ])
        .sort({ "date": "desc" })
        .populate("from to")
        .exec((err, messages) => {
        if (err) {
            return res.status(400).json({ err });
        }
        if (messages.length) {
            res.json({ messages });
        } else {
            res.send(`No messages found for ${req.query.user}`);
        }
    });
});

module.exports = Message;
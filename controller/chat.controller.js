exports.show = (req, res) => {
    res.render('./chat/chat', {title:'Chat'});
};

exports.send = (req, res) => {
    console.log(req.body.msg);
};
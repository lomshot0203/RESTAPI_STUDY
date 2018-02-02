var multer = require('multer');
var songsList = require('../data/songs/data.songs');
var sendData = {
    title : 'Songs',
    songList : songsList
};

var storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './data/songs/');
    } ,
    filename: (req, file, cb)=>{
        console.log(file);
        cb(null, file.originalname);
    }
});
var upload = multer({storage: storage}).single('file');

exports.song_list = (req, res) => {
    res.render('./songs/songs', sendData);
};

exports.song_delete_post = (req, res) => {
    console.log('call songs.remove...');
};

exports.song_create_post = (req, res) => {
    upload(req, res, (err)=>{
        if (err) {
            console.log(err);
        }
        var orignalNm = req.file.originalname;
        var newSong = {
          title : req.file.originalname ,
          src : '/data/songs/'+ req.file.originalname
        };
        sendData.songList.push(newSong);
        console.log(songsList);
        res.render('./songs/songs', sendData);
    });
};

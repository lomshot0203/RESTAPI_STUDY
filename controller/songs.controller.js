const songsList = require('../data/songs/songsList');
const fs = require('fs');
var path = require('path');
const songsDir = path.dirname(__dirname) + "/data/songs";


exports.get = (req, res) => {
    console.log('call songs.get...');
};

exports.list = (req, res) => {
    var sendData = {
        title : 'Songs',
        songList : songsList
    };
    return sendData;
};

exports.remove = (req, res) => {
    console.log('call songs.remove...');
};

exports.create = (req, res) => {
    console.log("call song create... \n");

    var mp3 = '';
    var mp3File = songsDir+'/audio_feedback_' + new Date().getTime() + '.mp3';
    req.on('data', function(data){
        console.log("loading... \n");
        mp3 += data;
    });
    req.on('end', function() {
        console.log("request completed");

        fs.open(mp3File, 'w', function (err, fd) {
            if (err) {
                return console.log(err);
            }
            // console.log(mp3File + ' file was read...');
            fs.writeFile(mp3File, mp3, 'base64', function (err) {
                if (err) {
                    console.log(err);
                }
                console.log('written to disk: ' + mp3File);
            });
        });

        return 200;
    });

    req.on('error', (err) => {
        // 여기서 `stderr`에 오류 메시지와 스택 트레이스를 출력합니다.
        console.error(err.stack);
    });
};

exports.modify = (req, res) => {
    console.log('call songs.modify...');
};

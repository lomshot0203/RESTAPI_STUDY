var chatApp = {};

var me = {};
me.avatar = "";

var you = {};
you.avatar = "";

chatApp.formatAMPM = function (date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

//-- No use time. It is a javaScript effect.
chatApp.insertChat = function(who, text, time = 0){
    var control = "";
    var date = formatAMPM(new Date());

    if (who == "me"){

        control = '<li style="width:100%">' +
            '<div class="msj macro">' +
            '<div class="avatar"><img class="img-circle" style="width:100%;" src="'+ me.avatar +'" /></div>' +
            '<div class="text text-l">' +
            '<p>'+ text +'</p>' +
            '<p><small>'+date+'</small></p>' +
            '</div>' +
            '</div>' +
            '</li>';
    }else{
        control = '<li style="width:100%;">' +
            '<div class="msj-rta macro">' +
            '<div class="text text-r">' +
            '<p>'+text+'</p>' +
            '<p><small>'+date+'</small></p>' +
            '</div>' +
            '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle" style="width:100%;" src="'+you.avatar+'" /></div>' +
            '</li>';
    }
};

chatApp.sendCilentMsgToServer = function (msg) {
    console.log("2 : "+msg);
    /*var formData = new FormData();
    formData.append('msg', msg);*/
    var formData = {};
    formData.msg = msg;
    var data = JSON.stringify(formData);
    var options = {
        url: '/chat/send',
        type: 'post',
        data: data,
        dataType:'json',
        processData: false,
        contentType:'application/json', /**/
        success: function (data, textStatus, xhr){
            console.log('data : '+ data );
            console.log('textStatus : '+ textStatus );
            console.log('xhr : '+ xhr );
        }
    };

    $.ajax(options);
};

function resetChat(){
    $("ul").empty();
}


//-- Clear Chat
resetChat();

//-- NOTE: No use time on insertChat.
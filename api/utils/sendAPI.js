var https = require('https');

module.exports = {
  send: function (messageData, cb) {
    messageData.access_token = sails.config.messenger.pageAccessToken;
    var data = JSON.stringify(messageData);
    var options = {
      hostname: 'graph.facebook.com',
      port: 443,
      path: '/' + sails.config.messenger.fbApiVersion + '/me/messages',
      qs: { access_token: sails.config.messenger.pageAccessToken },
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    var req = https.request(options, function (res) {
      var body = '';
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function () {
        var message = JSON.parse(body);
        if (!message)
          return cb('error while parsing json response, response was : ' + body, null);
        if (message.error)
          return cb(message, null);
        return cb(null, message);
      });
    });
    req.on('error', function (err) {
      return sails.log.error(err);
    });
    req.write(data);
    req.end();
  },
  typingOn: function (recipientId, done) {
    var messageData = {
      recipient: {
        id: recipientId
      },
      sender_action: "typing_on"
    };
    this.send(messageData, done);
  },
  typingOff: function (user, done) {
    var messageData = {
      recipient: {
        id: user.fbId
      },
      sender_action: "typing_off"
    };
    this.send(messageData, done);
  },
  welcome: function (user, done) {
    var messageData = {
      recipient: {
        id: user.fbId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "button",
            text: "Hola!",
            buttons: [{
              type: "postback",
              title: "Start",
              payload: "start"
            }]
          }
        }
      }
    };
    this.send(messageData, done);
  },
  start: function (user, text, done) {
    var messageData = {
      recipient: {
        id: user.fbId
      },
      message: {
        attachment: {
          type: "template",
          payload: {
            template_type: "button",
            text: text,
            buttons: [{
              type: "postback",
              title: "Ver productos",
              payload: "Productos"
            },
            {
              type: "postback",
              title: "Información",
              payload: "Información"
            }
           ]
          }
        }
      }
    };
    this.send(messageData, done);
  },

  productos: function (user, done) {
    // sails.controllers.Productos.list
        // res.send({Productos:productos});
        // productos.forEach(function(producto){console.log(producto.nombre)});
        var messageData = {
      recipient: {
        id: user.fbId
      },
      message: {
    attachment:{
      type:"template",
      payload:{
        template_type:"generic",
        elements:[
           {
            title:"Welcome!",
            image_url:"https://petersfancybrownhats.com/company_image.png",
            subtitle:"We have the right hat for everyone.",
            default_action: {
              type: "web_url",
              url: "https://petersfancybrownhats.com/view?item=103",
              webview_height_ratio: "tall",
            },
            buttons:[
              {
                type:"web_url",
                url:"https://petersfancybrownhats.com",
                title:"View Website"
              }
            ]
          }
        ]
      }
    }
  }
    };
          this.send(messageData, done);
  },
  webv: function(user,done){
    sails.log.info("2here");
    var messageData = {
      recipient:{
        id:user.fbId
      },
      message:{
        attachment:{
          type:"template",
          payload:{
            template_type:"button",
            text:"Try the URL button!",
            buttons:[{
                type:"web_url",
                title:"Webview",
                url:"https://limitless-mesa-41826.herokuapp.com",
                messenger_extensions:true,
                webview_height_ratio: "compact"
            }]
          }
        }
      }
    };
    this.send(messageData, done);
  }
}

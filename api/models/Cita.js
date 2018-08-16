module.exports = {
  attributes: {
    sender: {
      model: 'user'
    },
    fecha: {
      type: "string",
      index: true,
      required: true
    },
    motivo: {
      type: "string"
    },
  },
  // beforeValidate: function (message, next) {
  //   if (message.nlps) {
  //     var nlps = [];
  //     for (var entity in message.nlps.entities) {
  //       message.nlps.entities[entity][0].topic = entity
  //       nlps.push(message.nlps.entities[entity][0])
  //     }
  //     message.nlps = nlps.sort(function (n1, n2) {
  //       return n1.confidence < n2.confidence;
  //     })
  //     return next();
  //   }
  //   message.nlps = [];
  //   next();
  // }
};

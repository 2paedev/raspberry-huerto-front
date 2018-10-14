var f = require('faker');
var config = require('../config');

module.exports = {
  path: '/test',
  cache: false,
  status: function(req, res, next) {
    if (config.randomErrors) {
      var number = f.random.number(3);
      if (number == 0) {
        res.status(400).send({
          status_code: 400,
          error_message: 'Error 400 error_message'
        });
      } else {
        next();
      }
    } else {
      next();
    }
  },
  delay: config.delayGet,
  template: {
    datosTest: 'Esto es un texto de test.'
  }
};

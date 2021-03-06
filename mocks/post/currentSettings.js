var f = require('faker');
var config = require('../config');

module.exports = {
  path: '/api/settings/current',
  method: 'POST',
  collection: false,
  status: function(req, res, next) {
    if (config.randomErrors) {
      var number = f.random.number(5);
      if (number == 0) {
        res.status(400).send({
          status_code: 400,
          error_message: 'Error when set settings'
        });
      } else {
        next();
      }
    } else {
      next();
    }
  },
  cache: false,
  delay: config.delayPost,
  template: {
    status: 'OK',
    status_code: 200,
    message: 'Settings updated correctly'
  }
};

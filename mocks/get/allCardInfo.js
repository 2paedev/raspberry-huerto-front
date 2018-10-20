var f = require('faker');
var config = require('../config');

module.exports = {
  path: '/api/wheather/site/all',
  cache: false,
  collection: true,
  size: 10,
  status: function(req, res, next) {
    if (config.randomErrors) {
      var number = f.random.number(10);
      if (number == 0) {
        res.status(400).send({
          status_code: 400,
          error_message: 'Unavailable data site wheather'
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
    humidityAir: f.finance.amount(0, 100, 1),
    humidityGround: f.finance.amount(0, 100, 1),
    temperatureAir: f.finance.amount(-12, 42, 1)
  }
};

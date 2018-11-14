var f = require('faker');
var config = require('../config');
var helper = require('../helper');

module.exports = {
  path: '/api/humidity/ground',
  cache: false,
  collection: true,
  size: 300,
  status: function(req, res, next) {
    if (config.randomErrors) {
      var number = f.random.number(10);
      if (number == 0) {
        res.status(400).send({
          status_code: 400,
          error_message: 'Unavailable data humidity ground'
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
    created: function() {
      return helper.formatDate(
        f.date
          .between('2016-01-01', '2018-12-31')
          .toISOString()
          .substring(0, 10)
      );
    },
    value: function() {
      return f.finance.amount(0, 100, 1);
    }
  }
};

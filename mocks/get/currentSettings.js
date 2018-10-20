let f = require('faker');
let config = require('../config');

const SETTINGS = {
  MANUAL: {
    ID: 0,
    VALUES: {
      OFF: 0,
      ON: 1
    }
  },
  AUTO_HOURS: {
    ID: 1
  },
  AUTO_HUMIDITY: {
    ID: 2
  }
};

module.exports = {
  path: '/settings/current',
  cache: false,
  status(req, res, next) {
    if (config.randomErrors) {
      const number = f.random.number(10);
      if (number === 0) {
        res.status(400).send({
          status_code: 400,
          error_message: 'Unavailable current settings info'
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
    settingId: SETTINGS.MANUAL.ID,
    value: SETTINGS.MANUAL.VALUES.OFF
  }
};

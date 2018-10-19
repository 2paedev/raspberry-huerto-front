export const SYMBOLS = {
  TEMPERATURE: 'ºC',
  HUMIDITY: '%',
  METER: 'm',
};

export const CARD_INFO = {
  HUMIDITY_GROUND: 1,
  TEMPERATURE_AIR: 2,
  HUMIDITY_AIR: 3,
};

export const SETTINGS_OPTIONS = {
  MANUAL: {
    ID: 0,
  },
  AUTO_HOURS: {
    ID: 1,
  },
  AUTO_HUMIDITY: {
    ID: 2,
  },
};

export const SKY_WEATHER = {
  CLOUDY: {
    DESCRIPTION: 'Nuboso',
    ICON: 'assets/icons/nature-icons/cloud.svg',
  },
  CLOUDY_LIGHT_RAIN: {
    DESCRIPTION: 'Nuboso con lluvia escasa',
    ICON: 'assets/icons/nature-icons/rain.svg',
  },
  CLOUDY_INTERVALS: {
    DESCRIPTION: 'Intervalos nubosos',
    ICON: 'assets/icons/nature-icons/cloudy.svg',
  },
  CLOUDY_INTERVALS_RAIN: {
    DESCRIPTION: 'Intervalos nubosos con lluvia',
    ICON: 'assets/icons/nature-icons/rain-1.svg',
  },
  CLOUDY_INTERVALS_LIGHT_RAIN: {
    DESCRIPTION: 'Intervalos nubosos con lluvia escasa',
    ICON: 'assets/icons/nature-icons/rain-1.svg',
  },
  CLEAR: {
    DESCRIPTION: 'Despejado',
    ICON: 'assets/icons/nature-icons/sun.svg',
  },
};

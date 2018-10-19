export const OWM_API_KEY = '805136eeb923a0753889ddb29851fa22';

export const OWM_SAN_VICENTE_RASPEIG_INFO = {
  ID: 2511032,
  NAME: 'San Vicent del Raspeig',
  COUNTRY: 'ES',
  COORD: {
    LON: -0.5255,
    LAT: 38.3964,
  },
};

const OWM_URL = 'http://api.openweathermap.org/data/2.5';

export const OWM_API = {
  WEATHER: `${OWM_URL}/weather?id=${OWM_SAN_VICENTE_RASPEIG_INFO.ID}&APPID=${OWM_API_KEY}`,
};

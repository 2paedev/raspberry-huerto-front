import { environment } from "../../../../environments/environment";

const BASE_URL = environment.baseURL;

export const URLS_API = {
  ALL_CARD_INFO: `${BASE_URL}/weather/last/all`,
  SETTINGS: {
    CURRENT: `${BASE_URL}/settings/current`
  },
  HUMIDITY: {
    AIR: `${BASE_URL}/humidity/air`,
    GROUND: `${BASE_URL}/humidity/ground`
  },
  TEMPERATURE: {
    AIR: `${BASE_URL}/temperature/air`
  },
  AEMET: {
    CITY_INFO: `${BASE_URL}/aemet/city-info`,
    PREDICTION: `${BASE_URL}/aemet/prediction`
  }
};

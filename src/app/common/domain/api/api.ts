import { environment } from '../../../../environments/environment';

const BASE_URL = environment.baseURL;

export const URLS_API = {
  TEST: `${BASE_URL}/test`,
  ALL_CARD_INFO: `${BASE_URL}/wheather/site/all`,
  SETTINGS: {
    CURRENT: `${BASE_URL}/settings/current`,
    MANUAL: `${BASE_URL}/settings/manual`,
    AUTO_HOURS: `${BASE_URL}/settings/auto/hours`,
    AUTO_HUMIDITY: `${BASE_URL}/settings/auto/humidity`,
  },
};

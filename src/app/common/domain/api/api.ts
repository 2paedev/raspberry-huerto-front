import { environment } from "../../../../environments/environment";

const BASE_URL = environment.baseURL;

export const URLS_API = {
  ALL_CARD_INFO: `${BASE_URL}/weather/site/all`,
  SETTINGS: {
    CURRENT: `${BASE_URL}/settings/current`
  }
};

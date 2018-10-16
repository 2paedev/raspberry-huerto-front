import { environment } from '../../../../environments/environment';

const BASE_URL = environment.baseURL;

export const URLS_API = {
  TEST: `${BASE_URL}/test`,
  ALL_CARD_INFO: `${BASE_URL}/wheather/site/all`
};

const AEMET_URL = 'https://opendata.aemet.es/opendata/api';

export const AEMET_API = {
  MASTER: {
    MUNICIPIOS: `${AEMET_URL}/maestro/municipios`,
    MUNICIPIO: `${AEMET_URL}/maestro/municipio`,
  },
  PREDICTION: {
    DAILY: `${AEMET_URL}/prediccion/especifica/municipio/diaria`,
  },
};

export const AEMET_API_INFO = {
  SAN_VICENTE_RASPEIG: {
    ID: 'id03122',
    PROVINCIA_CODE: '03',
    MUNICIPIO_CODE: '122',
  },

  // COMUNIDAD_VALENCIANA_AREA_ID: '77',
  AEMET_API_KEY:
    // tslint:disable-next-line:max-line-length
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIycGFlZGV2QGdtYWlsLmNvbSIsImp0aSI6IjJkZjA2NjdmLWYyNTktNDY5OC1iNzQxLTliMGZkYzQ4NTlmMSIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTM5NjIzODg5LCJ1c2VySWQiOiIyZGYwNjY3Zi1mMjU5LTQ2OTgtYjc0MS05YjBmZGM0ODU5ZjEiLCJyb2xlIjoiIn0.kUqNLiLml65yhTw_71tSUaE6kClYkJqJ6SYDVW7_Jv8',
};

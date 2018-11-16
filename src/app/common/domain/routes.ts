export const APP_ROUTES = {
  HOME: "home",
  STATS: "stats"
  // HUMIDITY_GROUND_STATS: 'stats/humidity-ground',
  // TEMPERATURE_AIR_STATS: 'stats/temperature-air',
  // HUMIDITY_AIR_STATS: 'stats/humidity-air',
};

export const APP_ROUTES_PAGES = {
  HOME: "homePage",
  STATS: "statsPage"
  // HUMIDITY_GROUND_STATS: 'humidityGroundStatsPage',
  // TEMPERATURE_AIR_STATS: 'temperatureAirStatsPage',
  // HUMIDITY_AIR_STATS: 'humidityAirStatsPage',
};

export const APP_PAGES_CHILDREN = {
  HOME: "./pages/home/home.module#HomeModule",
  STATS: "./pages/stats/stats.module#StatsModule"
};

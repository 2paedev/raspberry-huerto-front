export function getLimitsHumidityValues() {
  const limitsValues = {
    minCriticalHumidity: 0.0,
    maxCriticalHumidity: 30.0,
    minWarningHumidity: 30.0,
    maxWarningHumidity: 60.0,
    minNormalHumidity: 60.0,
    maxNormalHumidity: 100.0,
  };
  return limitsValues;
}

export function getLimitsTemperatureValues() {
  const limitsValues = {
    minHotCriticalTemperature: 33.0,
    maxHotCriticalTemperature: 60.0,
    minHotWarningTemperature: 25.0,
    maxHotWarningTemperature: 33.0,
    minNormalTemperature: 12.0,
    maxNormalTemperature: 25.0,
    minColdCriticalTemperature: -20.0,
    maxColdCriticalTemperature: 2.0,
    minColdWarningTemperature: 2.0,
    maxColdWarningTemperature: 12.0,
  };
  return limitsValues;
}

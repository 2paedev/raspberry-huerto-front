export function getLimitsHumidityValues() {
  const limitsValues = {
    minCriticalHumidity: 0,
    maxCriticalHumidity: 30,
    minWarningHumidity: 30,
    maxWarningHumidity: 50,
    minNormalHumidity: 50,
    maxNormalHumidity: 100,
  };
  return limitsValues;
}

export function getLimitsTemperatureValues() {
  const limitsValues = {
    minHotTemperature: 28,
    maxHotTemperature: 60,
    minNormalTemperature: 12,
    maxNormalTemperature: 28,
    minColdTemperature: -20,
    maxColdTemperature: 12,
  };
  return limitsValues;
}

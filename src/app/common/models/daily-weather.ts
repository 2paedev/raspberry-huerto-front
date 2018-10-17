export class DailyWeather {
  id: Number;
  municipioName: string;
  provinciaName: string;
  reportDate: string;
  prediction: Prediction[];
}

export class Prediction {
  date: string;
  uvMax: Number;
  relativeHumidity: MaxMin;
  thermalSensation: MaxMin;
  temperature: MaxMin;
  precipitationProbability: PeriodValues[];
  sky: PeriodValues[];
  wind: WindValues[];
}

export class MaxMin {
  max: Number;
  min: Number;
}

export class PeriodValues {
  value: string;
  hoursDayPeriod: string;
  description?: string;
}

export class WindValues {
  direction: string;
  speed: Number;
  period: string;
}

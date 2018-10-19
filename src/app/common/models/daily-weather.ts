export class DailyWeather {
  id: number;
  municipioName: string;
  provinciaName: string;
  reportDate: string;
  prediction: Prediction[];
}

export class Prediction {
  date: string;
  uvMax: number;
  relativeHumidity: MaxMin;
  thermalSensation: MaxMin;
  temperature: MaxMin;
  precipitationProbability: PeriodValues[];
  sky: PeriodValues[];
  wind: WindValues[];
}

export class MaxMin {
  max: number;
  min: number;
}

export class PeriodValues {
  value: string;
  hoursDayPeriod: string;
  description?: string;
}

export class WindValues {
  direction: string;
  speed: number;
  period: string;
}

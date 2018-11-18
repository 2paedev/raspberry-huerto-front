import { Injectable } from "@angular/core";
import { StatsDataModel } from "../models/stats-data-model";
import { LineChart } from "../models/line-chart";

@Injectable()
export class LineChartFormatter {
  format(data: StatsDataModel[]) {
    const dataFormatted: LineChart[] = [
      {
        name: "Air",
        series: []
      }
    ];
    data.forEach((measure: StatsDataModel) => {
      const dateParts = measure.created.split("/");
      const dateObject = new Date(
        // tslint:disable-next-line:radix
        parseInt(dateParts[2]),
        // tslint:disable-next-line:radix
        parseInt(dateParts[1]) - 1,
        // tslint:disable-next-line:radix
        parseInt(dateParts[0])
      );
      const currentSerie = {
        name: dateObject,
        value: measure.value
      };
      dataFormatted[0].series.push(currentSerie);
    });
    return dataFormatted;
  }
}

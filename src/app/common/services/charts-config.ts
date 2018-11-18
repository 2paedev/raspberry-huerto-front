import { Injectable } from "@angular/core";
import { colorSets } from "@swimlane/ngx-charts/release/utils/color-sets";

@Injectable()
export class ChartsConfig {
  colorSchemeGood = this.setColorScheme("cool");

  public lineChart = {
    colorScheme: this.colorSchemeGood,
    view: undefined,
    showXAxisLabel: true,
    showXAxis: true,
    xAxisLabel: "Time",
    showYAxis: true,
    showYAxisLabel: true,
    yAxisLabel: "Humidity(%)",
    showLegend: true,
    autoScale: true
  };

  setColorScheme(name) {
    return colorSets.find(s => s.name === name);
  }
}

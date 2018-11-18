import { Component, OnInit, Input } from "@angular/core";
import { StatsDataModel } from "../../models/stats-data-model";
import { LineChart } from "../../models/line-chart";
import { LineChartFormatter } from "../../formatters/line-chart-formatter.service";
import { ChartsConfig } from "../../services/charts-config";

@Component({
  selector: "app-stats-weather",
  templateUrl: "./stats-weather.component.html",
  styleUrls: ["./stats-weather.component.scss"],
  providers: [LineChartFormatter, ChartsConfig]
})
export class StatsWeatherComponent implements OnInit {
  @Input() data: StatsDataModel[];

  dataLineChart: LineChart[];

  configs: any;

  constructor(
    private lineChartFormatter: LineChartFormatter,
    private charts: ChartsConfig
  ) {}

  ngOnInit() {
    this.dataLineChart = this.lineChartFormatter.format(this.data);
    this.configs = {
      lineChart: this.charts.lineChart
    };
  }

  onSelect(event) {
    console.log(event);
  }
}

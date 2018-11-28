import { Component, OnInit, Input } from "@angular/core";
import { ChartsConfig } from "../../services/charts-config";
import { LineChartFormatter } from "../../formatters/line-chart-formatter.service";
import { LineChart } from "../../models/line-chart";
import { StatsDataModel } from "../../models/stats-data-model";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.scss"],
  providers: [LineChartFormatter, ChartsConfig]
})
export class LineChartComponent implements OnInit {
  @Input() data: StatsDataModel[];

  configs: any;
  dataFormatted: LineChart[];

  constructor(
    private lineChartFormatter: LineChartFormatter,
    private charts: ChartsConfig
  ) {}

  ngOnInit() {
    this.configs = {
      lineChart: this.charts.lineChart
    };
    this.dataFormatted = this.lineChartFormatter.format(this.data);
  }

  onSelect(event) {
    console.log(event);
  }
}

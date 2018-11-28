import { Component, Input } from "@angular/core";
import { StatsDataModel } from "../../models/stats-data-model";

@Component({
  selector: "app-stats-weather",
  templateUrl: "./stats-weather.component.html",
  styleUrls: ["./stats-weather.component.scss"]
})
export class StatsWeatherComponent {
  @Input() data: StatsDataModel[];
}

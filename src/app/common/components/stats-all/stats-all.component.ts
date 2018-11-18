import { Component, OnInit, Input } from "@angular/core";
import { StatsDataModel } from "../../models/stats-data-model";

@Component({
  selector: "app-stats-all",
  templateUrl: "./stats-all.component.html",
  styleUrls: ["./stats-all.component.scss"]
})
export class StatsAllComponent implements OnInit {
  @Input() data: StatsDataModel[];

  constructor() {}

  ngOnInit() {}
}

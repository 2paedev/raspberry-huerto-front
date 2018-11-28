import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { APP_ROUTES } from "src/app/common/domain/routes";
import { TEXTS } from "src/app/common/domain/texts";
import { StatsDataModel } from "src/app/common/models/stats-data-model";
import { isUndefinedOrNullOrEmpty } from "src/app/common/helpers/common";

@Component({
  selector: "app-stats",
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.scss"],
  providers: []
})
export class StatsComponent implements OnInit {
  @Input() initialTab: number;

  data: StatsDataModel[];
  BACK_BUTTON_TEXT: string;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.initVariables();
  }

  initVariables() {
    this.initialTab = this.activeRoute.snapshot.data.currentTab;
    this.BACK_BUTTON_TEXT = TEXTS.LABELS.GO_BACK;

    this.setStatsData();
  }

  setStatsData() {
    const snapshotData = this.activeRoute.snapshot.data;
    if (!isUndefinedOrNullOrEmpty(snapshotData.http)) {
      this.data = this.activeRoute.snapshot.data.http;
      return;
    }
  }

  goHome() {
    this.router.navigate([APP_ROUTES.HOME]);
  }
}

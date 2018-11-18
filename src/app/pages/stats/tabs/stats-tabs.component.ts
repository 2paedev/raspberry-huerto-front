import { Component, OnInit, Input } from "@angular/core";
import { CARD_INFO } from "src/app/common/domain/constants";
import { StatsDataModel } from "src/app/common/models/stats-data-model";
import { HumidityService } from "src/app/common/domain/api/humidity.service";
import { TemperatureService } from "src/app/common/domain/api/temperature.service";
import { SpinnerService } from "src/app/common/services/spinner.service";

@Component({
  selector: "app-stats-tabs",
  templateUrl: "./stats-tabs.component.html",
  styleUrls: ["./stats-tabs.component.scss"]
})
export class StatsTabsComponent implements OnInit {
  @Input() data: StatsDataModel[];
  @Input() tabSelected: number;

  TAB_ID: any;

  constructor(
    private humidityApi: HumidityService,
    private temperatureApi: TemperatureService,
    private spinner: SpinnerService
  ) {}

  ngOnInit() {
    this.initVariables();
  }

  initVariables() {
    this.TAB_ID = CARD_INFO;
  }

  tabChange(event: any) {
    this.tabSelected = event.nextId;
    const isHumidityAir = this.tabSelected === CARD_INFO.HUMIDITY_AIR;
    const isHumidityGround = this.tabSelected === CARD_INFO.HUMIDITY_GROUND;
    const isTemperatureAir = this.tabSelected === CARD_INFO.TEMPERATURE_AIR;
    const isAll = this.tabSelected === CARD_INFO.ALL;

    if (isHumidityAir) {
      this.setData(this.humidityApi.historicHumidityAir());
    }

    if (isHumidityGround) {
      this.setData(this.humidityApi.historicHumidityGround());
    }

    if (isTemperatureAir) {
      this.setData(this.temperatureApi.historicTemperatureAir());
    }

    if (isAll) {
      this.spinner.deactivate();
    }
  }

  setData(observer: any) {
    this.spinner.activate();
    observer.subscribe(
      response => {
        this.data = response;
        this.spinner.deactivate();
      },
      error => {
        this.spinner.deactivate();
      }
    );
  }
}

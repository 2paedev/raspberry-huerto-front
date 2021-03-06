import { NgModule } from "@angular/core";
import { CardInfoComponent } from "./card-info/card-info.component";
import { WeatherForecastComponent } from "./weather-forecast/weather-forecast.component";
import { IrrigationSettingsComponent } from "./irrigation-settings/irrigation-settings.component";
import { CameraZoneComponent } from "./camera-zone/camera-zone.component";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { VendorComponentsModule } from "./vendor-components.module";
import { PanelErrorComponent } from "./panel-error/panel-error.component";
import { DetailInfoModalComponent } from "./modals/detail-info-modal/detail-info-modal.component";
import { CustomButtomComponent } from "./custom-buttom/custom-buttom.component";
// tslint:disable-next-line:max-line-length
import { CardWeatherForecastComponent } from "./card-weather-forecast/card-weather-forecast.component";
import { PanelInfoModalComponent } from "./modals/panel-info-modal/panel-info-modal.component";
import { ModalHeaderComponent } from "./modals/modal-header/modal-header.component";
import { ModalFooterComponent } from "./modals/modal-footer/modal-footer.component";
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { StatsAllComponent } from "./stats-all/stats-all.component";
import { StatsWeatherComponent } from "./stats-weather/stats-weather.component";
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  imports: [CommonModule, VendorComponentsModule],
  declarations: [
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
    LoadingSpinnerComponent,
    PanelErrorComponent,
    DetailInfoModalComponent,
    CustomButtomComponent,
    CardWeatherForecastComponent,
    PanelInfoModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ToggleButtonComponent,
    StatsAllComponent,
    StatsWeatherComponent,
    LineChartComponent
  ],
  exports: [
    CommonModule,
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
    LoadingSpinnerComponent,
    PanelErrorComponent,
    DetailInfoModalComponent,
    CustomButtomComponent,
    CardWeatherForecastComponent,
    PanelInfoModalComponent,
    ModalHeaderComponent,
    ModalFooterComponent,
    ToggleButtonComponent,
    StatsAllComponent,
    StatsWeatherComponent,
    LineChartComponent
  ],
  entryComponents: [DetailInfoModalComponent, PanelInfoModalComponent]
})
export class SharedComponentsModule {}

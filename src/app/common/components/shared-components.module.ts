import { NgModule } from '@angular/core';
import { CardInfoComponent } from './card-info/card-info.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { IrrigationSettingsComponent } from './irrigation-settings/irrigation-settings.component';
import { CameraZoneComponent } from './camera-zone/camera-zone.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { VendorComponentsModule } from './vendor-components.module';
import { PanelErrorComponent } from './panel-error/panel-error.component';
import { DetailInfoModalComponent } from './modals/detail-info-modal/detail-info-modal.component';
import { CustomButtomComponent } from './custom-buttom/custom-buttom.component';
import { CardWeatherForecastComponent } from './card-weather-forecast/card-weather-forecast.component';

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
  ],
  entryComponents: [DetailInfoModalComponent],
})
export class SharedComponentsModule {}

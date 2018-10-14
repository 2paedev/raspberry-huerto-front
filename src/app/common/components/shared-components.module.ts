import { NgModule } from '@angular/core';
import { CardInfoComponent } from './card-info/card-info.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { IrrigationSettingsComponent } from './irrigation-settings/irrigation-settings.component';
import { CameraZoneComponent } from './camera-zone/camera-zone.component';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { VendorComponentsModule } from './vendor-components.module';
import { PanelErrorComponent } from './panel-error/panel-error.component';

@NgModule({
  imports: [CommonModule, VendorComponentsModule],
  declarations: [
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
    LoadingSpinnerComponent,
    PanelErrorComponent,
  ],
  exports: [
    CommonModule,
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
    LoadingSpinnerComponent,
    PanelErrorComponent,
  ],
})
export class SharedComponentsModule {}

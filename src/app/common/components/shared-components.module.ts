import { NgModule } from '@angular/core';
import { CardInfoComponent } from './card-info/card-info.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { IrrigationSettingsComponent } from './irrigation-settings/irrigation-settings.component';
import { CameraZoneComponent } from './camera-zone/camera-zone.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
  ],
  exports: [
    CommonModule,
    CardInfoComponent,
    WeatherForecastComponent,
    IrrigationSettingsComponent,
    CameraZoneComponent,
  ],
})
export class SharedComponentsModule {}

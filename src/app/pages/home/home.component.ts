import { Component, OnInit } from '@angular/core';
import { SYMBOLS, CARD_INFO, MESSAGE_ERROR } from 'src/app/common/domain/constants';
import { interval } from 'rxjs/internal/observable/interval';
import { INTERVAL_TIME_REQUESTS } from 'src/app/common/helpers/config-requests';
import { CardInfoService } from 'src/app/common/domain/api/card-info.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/common/domain/routes';
import { AemetMasterService } from 'src/app/common/domain/api/aemet/aemet-master.service';
import { City } from 'src/app/common/models/city';
// tslint:disable-next-line:max-line-length
import { WeatherForecastFormatter } from 'src/app/common/components/weather-forecast/weather-forecast-formatter.components';
import { formatMessageError } from 'src/app/common/helpers/errors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CardInfoService, AemetMasterService],
})
export class HomeComponent implements OnInit {
  symbols = SYMBOLS;
  cardInfoValues = {
    humidityAir: 0.0,
    humidityGround: 0.0,
    temperatureAir: 0.0,
  };
  showingSpinner: boolean;
  dataWeatherForecastLoaded: boolean;
  error: any;
  messageError: any;
  cardInfoIds = CARD_INFO;

  municipioData: City;

  constructor(
    private cardInfoApi: CardInfoService,
    private aemetMasterApi: AemetMasterService,
    private weatherForecastFormatter: WeatherForecastFormatter,
    private router: Router,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
    this.getAllCardInfo();
    // TODO: descomentar si queremos q haga peticiones cada 10 seg
    // interval(INTERVAL_TIME_REQUESTS).subscribe((val) => {
    //   this.getAllCardInfo();
    // });
    this.getWheatherData();
  }

  initVariables() {
    this.showingSpinner = false;
    this.dataWeatherForecastLoaded = false;
    this.error = {
      inCardInfo: false,
      inWeatherForecast: false,
    };
    this.messageError = {
      inCardInfo: '',
      inWeatherForecast: '',
    };
  }

  getAllCardInfo() {
    this.showingSpinner = true;
    this.cardInfoApi.getAllInfo({}).subscribe(
      (response) => {
        this.showingSpinner = false;
        this.error.inCardInfo = false;
        this.setCardInfoValues(response);
      },
      (error) => {
        this.showingSpinner = false;
        this.error.inCardInfo = true;
        this.messageError.inCardInfo = formatMessageError(error, MESSAGE_ERROR.CARD_INFO);
      },
    );
  }

  getWheatherData() {
    this.dataWeatherForecastLoaded = false;
    this.aemetMasterApi.getMunicipio({}).subscribe(
      (response) => {
        this.error.inWeatherForecast = false;
        this.dataWeatherForecastLoaded = true;
        this.municipioData = this.weatherForecastFormatter.formatMunicipioInfo(response[0]);
      },
      (error) => {
        this.error.inWeatherForecast = true;
        this.dataWeatherForecastLoaded = false;
        this.messageError.inWeatherForecast = formatMessageError(
          error,
          MESSAGE_ERROR.OPENWEATHERMAP,
        );
      },
    );
  }

  setCardInfoValues(data) {
    this.cardInfoValues.humidityAir = data.humidityAir;
    this.cardInfoValues.humidityGround = data.humidityGround;
    this.cardInfoValues.temperatureAir = data.temperatureAir;
  }

  goToCardStats(cardInfoId: Number) {
    const routePathToGo = this.getStatsRoutePath(cardInfoId);
    this.router.navigate([routePathToGo]);
  }

  getStatsRoutePath(id: Number) {
    if (id === CARD_INFO.HUMIDITY_GROUND) {
      return APP_ROUTES.HUMIDITY_GROUND_STATS;
    }
    if (id === CARD_INFO.TEMPERATURE_AIR) {
      return APP_ROUTES.TEMPERATURE_AIR_STATS;
    }
    if (id === CARD_INFO.HUMIDITY_AIR) {
      return APP_ROUTES.HUMIDITY_AIR_STATS;
    }
  }
}

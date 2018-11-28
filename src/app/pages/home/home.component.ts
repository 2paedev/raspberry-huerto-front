import { Component, OnInit } from "@angular/core";
import { SYMBOLS, CARD_INFO } from "src/app/common/domain/constants";
import { CardInfoService } from "src/app/common/domain/api/card-info.service";
import { Router } from "@angular/router";
import { APP_ROUTES } from "src/app/common/domain/routes";
import { City } from "src/app/common/models/city";
// tslint:disable-next-line:max-line-length
import { WeatherForecastFormatter } from "src/app/common/formatters/weather-forecast-formatter.service";
import { formatMessageError } from "src/app/common/helpers/errors";
import { HttpClient } from "@angular/common/http";
import { TEXTS } from "src/app/common/domain/texts";
import { CardInfoValues } from "src/app/common/models/card-info-values";
import { StatsTabs } from "src/app/common/services/stats-tabs.service";
import { SpinnerService } from "src/app/common/services/spinner.service";
import { AemetService } from "src/app/common/domain/api/aemet.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [CardInfoService, AemetService]
})
export class HomeComponent implements OnInit {
  symbols = SYMBOLS;
  cardInfoValues: CardInfoValues;
  dataWeatherForecastLoaded: boolean;
  error: any;
  messageError: any;
  cardInfoPanelMessage: any;
  cardInfoIds = CARD_INFO;
  texts: any;

  municipioData: City;
  weatherDailyPredictionData: any;

  constructor(
    private cardInfoApi: CardInfoService,
    private aemetApi: AemetService,
    private weatherForecastFormatter: WeatherForecastFormatter,
    private statsTabs: StatsTabs,
    private spinner: SpinnerService,
    private router: Router,
    private httpClient: HttpClient
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
    this.getMunicipioData();
    this.getDailyPredictionWeather();
  }

  initVariables() {
    this.dataWeatherForecastLoaded = false;
    this.error = {
      inCardInfo: false,
      inWeatherForecast: false
    };
    this.cardInfoValues = {
      id: 0,
      humidityAir: 0.0,
      humidityGround: 0.0,
      temperatureAir: 0.0
    };
    this.messageError = {
      inCardInfo: "",
      inWeatherForecast: ""
    };
    this.cardInfoPanelMessage = {
      humidityGround: ["Message 1", "Message 2"],
      temperatureAir: ["Message 1", "Message 2"],
      humidityAir: ["Message 1", "Message 2"]
    };
    this.texts = TEXTS;
  }

  getAllCardInfo() {
    this.spinner.activate();
    this.cardInfoApi.getAllInfo().subscribe(
      response => {
        this.spinner.deactivate();
        this.error.inCardInfo = false;
        this.setCardInfoValues(response);
      },
      error => {
        this.spinner.deactivate();
        this.error.inCardInfo = true;
        this.messageError.inCardInfo = formatMessageError(
          error,
          TEXTS.MESSAGE_ERRORS.CARD_INFO
        );
      }
    );
  }

  getMunicipioData() {
    this.dataWeatherForecastLoaded = false;
    this.aemetApi.getCityInfo().subscribe(
      response => {
        debugger;
        this.error.inWeatherForecast = false;
        this.dataWeatherForecastLoaded = true;
        this.municipioData = this.weatherForecastFormatter.formatMunicipioInfo(
          response[0]
        );
      },
      error => {
        this.error.inWeatherForecast = true;
        this.dataWeatherForecastLoaded = false;
        this.messageError.inWeatherForecast = formatMessageError(
          error,
          TEXTS.MESSAGE_ERRORS.AEMET_OPEN_DATA
        );
      }
    );
  }

  getDailyPredictionWeather() {
    this.dataWeatherForecastLoaded = false;
    this.aemetApi.getPredictionInfo().subscribe(
      response => {
        debugger;
        this.error.inWeatherForecast = false;
        this.dataWeatherForecastLoaded = true;
        this.weatherDailyPredictionData = this.weatherForecastFormatter.formatPredictionDailyData(
          response[0]
        );
      },
      error => {
        this.error.inWeatherForecast = true;
        this.dataWeatherForecastLoaded = false;
        this.messageError.inWeatherForecast = formatMessageError(
          error,
          TEXTS.MESSAGE_ERRORS.AEMET_OPEN_DATA
        );
      }
    );
  }

  setCardInfoValues(data) {
    this.cardInfoValues.id = data.id;
    this.cardInfoValues.humidityAir = data.humidityAir;
    this.cardInfoValues.humidityGround = data.humidityGround;
    this.cardInfoValues.temperatureAir = data.temperatureAir;
  }

  goToCardStats(cardInfoId: number) {
    this.statsTabs.current = cardInfoId;
    this.router.navigate([APP_ROUTES.STATS]);
  }
}

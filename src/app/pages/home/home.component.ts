import { Component, OnInit } from '@angular/core';
import { SYMBOLS, CARD_INFO } from 'src/app/common/domain/constants';
import { interval } from 'rxjs/internal/observable/interval';
import { INTERVAL_TIME_REQUESTS } from 'src/app/common/helpers/config-requests';
import { CardInfoService } from 'src/app/common/domain/api/card-info.service';
import { Router } from '@angular/router';
import { APP_ROUTES } from 'src/app/common/domain/routes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CardInfoService]
})
export class HomeComponent implements OnInit {
  symbols = SYMBOLS;
  cardInfoValues = {
    humidityAir: 0.0,
    humidityGround: 0.0,
    temperatureAir: 0.0
  };
  showingSpinner: boolean;
  errorInCardInfo: boolean;
  errorInCardInfoMessage: string;
  cardInfoIds = CARD_INFO;

  constructor(private cardInfoApi: CardInfoService, private router: Router) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
    this.getAllCardInfo();
    // interval(INTERVAL_TIME_REQUESTS).subscribe((val) => {
    //   this.getAllCardInfo();
    // });
  }

  initVariables() {
    this.showingSpinner = false;
    this.errorInCardInfo = false;
  }

  getAllCardInfo() {
    this.showingSpinner = true;
    this.cardInfoApi.getAllInfo({}).subscribe(
      (response) => {
        this.showingSpinner = false;
        this.errorInCardInfo = false;
        this.setCardInfoValues(response);
      },
      (error) => {
        this.showingSpinner = false;
        this.errorInCardInfo = true;
        this.errorInCardInfoMessage = error.error.error_message;
      }
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

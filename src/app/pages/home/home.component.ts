import { Component, OnInit } from '@angular/core';
import { SYMBOLS } from 'src/app/common/domain/constants';
import { interval } from 'rxjs/internal/observable/interval';
import { INTERVAL_TIME_REQUESTS } from 'src/app/common/helpers/config-requests';
import { CardInfoService } from 'src/app/common/domain/api/card-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [CardInfoService],
})
export class HomeComponent implements OnInit {
  symbols = SYMBOLS;
  cardInfoValues = {
    humidityAir: 0.0,
    humidityGround: 0.0,
    temperatureAir: 0.0,
  };
  showingSpinner: boolean;
  errorInCardInfo: boolean;
  errorInCardInfoMessage: string;

  constructor(private cardInfoApi: CardInfoService) {}

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
        console.log(error);
      },
    );
  }

  setCardInfoValues(data) {
    this.cardInfoValues.humidityAir = data.humidityAir;
    this.cardInfoValues.humidityGround = data.humidityGround;
    this.cardInfoValues.temperatureAir = data.temperatureAir;
  }
}

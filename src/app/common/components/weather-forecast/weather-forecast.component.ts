import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/city';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailInfoModalComponent } from '../modals/detail-info-modal/detail-info-modal.component';
// tslint:disable-next-line:max-line-length
import { DetailInfoModalFormatter } from '../modals/detail-info-modal/detail-info-modal-formatter.component';
import { DailyWeather } from '../../models/daily-weather';

const OPTIONS_DETAIL_INFO_MODAL = {
  windowClass: 'detail-info-modal',
  backdrop: 'static' as 'static',
  keyboard: false,
};

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  providers: [],
})
export class WeatherForecastComponent implements OnInit {
  @Input()
  municipioData: City;

  @Input()
  dailyPredictionData: DailyWeather;

  title: string;
  cityInfoModal: any;

  constructor(
    private serviceModal: NgbModal,
    private detailInfoModalFormatter: DetailInfoModalFormatter,
  ) {}

  ngOnInit() {
    this.init();
  }

  init() {
    this.initVariables();
  }

  initVariables() {
    this.title = this.municipioData.name;
  }

  openCityInfoModal() {
    this.cityInfoModal = this.serviceModal.open(
      DetailInfoModalComponent,
      OPTIONS_DETAIL_INFO_MODAL,
    );
    // tslint:disable-next-line:max-line-length
    this.cityInfoModal.componentInstance.infoData = this.detailInfoModalFormatter.formatDetailInfoData(
      this.municipioData,
    );
  }
}

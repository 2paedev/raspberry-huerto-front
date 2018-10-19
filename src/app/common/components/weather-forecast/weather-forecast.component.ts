import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../models/city';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailInfoModalComponent } from '../modals/detail-info-modal/detail-info-modal.component';
// tslint:disable-next-line:max-line-length
import { DetailInfoModalFormatter } from '../../formatters/detail-info-modal-formatter.component';
import { DailyWeather } from '../../models/daily-weather';
import { PanelInfoModalComponent } from '../modals/panel-info-modal/panel-info-modal.component';
import { TEXTS } from '../../domain/texts';

const OPTIONS_DETAIL_INFO_MODAL = {
  windowClass: 'detail-info-modal',
  backdrop: 'static' as 'static',
  keyboard: false,
};
const OPTIONS_PANEL_INFO_MODAL = {
  windowClass: 'weather-forecast-panel-info-modal',
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
  modals: any;

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
    this.modals = {
      cityInfo: undefined,
      predictionDataModal: undefined,
      panelInfo: undefined,
    };
  }

  openCityInfoModal() {
    this.modals.cityInfoModal = this.serviceModal.open(
      DetailInfoModalComponent,
      OPTIONS_DETAIL_INFO_MODAL,
    );
    // tslint:disable-next-line:max-line-length
    this.modals.cityInfoModal.componentInstance.infoData = this.detailInfoModalFormatter.formatDetailInfoData(
      this.municipioData,
    );
    this.modals.cityInfoModal.componentInstance.title = TEXTS.CITY_INFO_MODAL_TITLE;
  }

  openPredictionDataModal(dayIndex) {
    this.modals.predictionDataModal = this.serviceModal.open(
      DetailInfoModalComponent,
      OPTIONS_DETAIL_INFO_MODAL,
    );
    // tslint:disable-next-line:max-line-length
    this.modals.predictionDataModal.componentInstance.infoData = this.detailInfoModalFormatter.formatDetailPredictionData(
      this.dailyPredictionData.prediction[dayIndex],
    );
    this.modals.predictionDataModal.componentInstance.title = TEXTS.PREDICTION_DATA_MODAL_TITLE;
  }
}

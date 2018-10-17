import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWeatherForecastComponent } from './card-weather-forecast.component';

describe('CardWeatherForecastComponent', () => {
  let component: CardWeatherForecastComponent;
  let fixture: ComponentFixture<CardWeatherForecastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardWeatherForecastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardWeatherForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

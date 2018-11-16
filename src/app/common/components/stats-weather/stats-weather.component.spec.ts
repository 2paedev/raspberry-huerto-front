import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsWeatherComponent } from './stats-weather.component';

describe('StatsWeatherComponent', () => {
  let component: StatsWeatherComponent;
  let fixture: ComponentFixture<StatsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

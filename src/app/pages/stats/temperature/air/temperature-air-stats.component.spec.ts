import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TemperatureAirStatsComponent } from './temperature-air-stats.component';

describe('TemperatureAirStatsComponent', () => {
  let component: TemperatureAirStatsComponent;
  let fixture: ComponentFixture<TemperatureAirStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemperatureAirStatsComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureAirStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create the TemperatureAirStatsComponent', () => {
    expect(component).toBeTruthy();
  });
});

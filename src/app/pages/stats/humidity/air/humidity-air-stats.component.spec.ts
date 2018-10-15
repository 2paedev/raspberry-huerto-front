import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumidityAirStatsComponent } from './humidity-air-stats.component';

describe('HumidityAirStatsComponent', () => {
  let component: HumidityAirStatsComponent;
  let fixture: ComponentFixture<HumidityAirStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HumidityAirStatsComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityAirStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create the HumidityAirStatsComponent', () => {
    expect(component).toBeTruthy();
  });
});

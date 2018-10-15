import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HumidityGroundStatsComponent } from './humidity-ground-stats.component';

describe('HumidityGroundStatsComponent', () => {
  let component: HumidityGroundStatsComponent;
  let fixture: ComponentFixture<HumidityGroundStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HumidityGroundStatsComponent],
      imports: [],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityGroundStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create the HumidityGroundStatsComponent', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsAllComponent } from './stats-all.component';

describe('StatsAllComponent', () => {
  let component: StatsAllComponent;
  let fixture: ComponentFixture<StatsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

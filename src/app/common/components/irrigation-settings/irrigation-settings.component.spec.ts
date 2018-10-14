import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrrigationSettingsComponent } from './irrigation-settings.component';

describe('IrrigationSettingsComponent', () => {
  let component: IrrigationSettingsComponent;
  let fixture: ComponentFixture<IrrigationSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IrrigationSettingsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrrigationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

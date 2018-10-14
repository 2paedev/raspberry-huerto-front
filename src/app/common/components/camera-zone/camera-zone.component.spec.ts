import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraZoneComponent } from './camera-zone.component';

describe('CameraZoneComponent', () => {
  let component: CameraZoneComponent;
  let fixture: ComponentFixture<CameraZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CameraZoneComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelInfoModalComponent } from './panel-info-modal.component';

describe('PanelInfoModalComponent', () => {
  let component: PanelInfoModalComponent;
  let fixture: ComponentFixture<PanelInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelInfoModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

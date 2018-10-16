import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInfoModalComponent } from './detail-info-modal.component';

describe('DetailInfoModalComponent', () => {
  let component: DetailInfoModalComponent;
  let fixture: ComponentFixture<DetailInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

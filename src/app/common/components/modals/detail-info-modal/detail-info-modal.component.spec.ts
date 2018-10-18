import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { SharedComponentsModule } from '../../shared-components.module';
import { DetailInfoModalComponent } from './detail-info-modal.component';

describe('DetailInfoModalComponent', () => {
  let component: DetailInfoModalComponent;
  let fixture: ComponentFixture<DetailInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule],
      providers: [NgbActiveModal],
    }).compileComponents();
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

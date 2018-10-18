import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelErrorComponent } from './panel-error.component';
import { SharedComponentsModule } from '../shared-components.module';

describe('PanelErrorComponent', () => {
  let component: PanelErrorComponent;
  let fixture: ComponentFixture<PanelErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedComponentsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

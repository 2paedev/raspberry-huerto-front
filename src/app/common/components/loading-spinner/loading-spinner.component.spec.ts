import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinnerComponent } from './loading-spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';

describe('LoadingSpinnerComponent', () => {
  let componente: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxSpinnerModule],
      declarations: [LoadingSpinnerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    componente = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente LoadingSpinner', () => {
    expect(componente).toBeTruthy();
  });
});

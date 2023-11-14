import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxRatesViewComponent } from './fx-rates-view.component';

describe('FxRatesViewComponent', () => {
  let component: FxRatesViewComponent;
  let fixture: ComponentFixture<FxRatesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FxRatesViewComponent]
    });
    fixture = TestBed.createComponent(FxRatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

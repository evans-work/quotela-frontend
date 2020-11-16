import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteOptionsComponent } from './quote-options.component';

describe('QuoteOptionsComponent', () => {
  let component: QuoteOptionsComponent;
  let fixture: ComponentFixture<QuoteOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

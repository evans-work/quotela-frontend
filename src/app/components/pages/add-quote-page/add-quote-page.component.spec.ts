import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuotePageComponent } from './add-quote-page.component';

describe('AddQuotePageComponent', () => {
  let component: AddQuotePageComponent;
  let fixture: ComponentFixture<AddQuotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuotePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

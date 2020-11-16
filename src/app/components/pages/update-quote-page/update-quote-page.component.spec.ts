import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateQuotePageComponent } from './update-quote-page.component';

describe('UpdateQuotePageComponent', () => {
  let component: UpdateQuotePageComponent;
  let fixture: ComponentFixture<UpdateQuotePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateQuotePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateQuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

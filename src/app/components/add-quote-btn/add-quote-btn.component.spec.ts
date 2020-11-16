import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuoteBtnComponent } from './add-quote-btn.component';

describe('AddQuoteBtnComponent', () => {
  let component: AddQuoteBtnComponent;
  let fixture: ComponentFixture<AddQuoteBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuoteBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuoteBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

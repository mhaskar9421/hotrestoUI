import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedCustomerListComponent } from './booked-customer-list.component';

describe('BookedCustomerListComponent', () => {
  let component: BookedCustomerListComponent;
  let fixture: ComponentFixture<BookedCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookedCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

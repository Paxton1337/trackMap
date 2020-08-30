import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTruckModalComponent } from './add-truck-modal.component';

describe('AddTruckModalComponent', () => {
  let component: AddTruckModalComponent;
  let fixture: ComponentFixture<AddTruckModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTruckModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTruckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

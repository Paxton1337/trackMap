import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTruckModalComponent } from './delete-truck-modal.component';

describe('DeleteTruckModalComponent', () => {
  let component: DeleteTruckModalComponent;
  let fixture: ComponentFixture<DeleteTruckModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTruckModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTruckModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

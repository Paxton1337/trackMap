import { TestBed } from '@angular/core/testing';

import { TruckControlService } from './truck-control.service';

describe('TrackControlService', () => {
  let service: TruckControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

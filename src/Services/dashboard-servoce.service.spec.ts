import { TestBed } from '@angular/core/testing';

import { DashboardServoceService } from './dashboard-servoce.service';

describe('DashboardServoceService', () => {
  let service: DashboardServoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardServoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed, inject } from '@angular/core/testing';

import { RobotFactoryService } from './robot-factory.service';

describe('RobotFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RobotFactoryService]
    });
  });

  it('should be created', inject([RobotFactoryService], (service: RobotFactoryService) => {
    expect(service).toBeTruthy();
  }));
});

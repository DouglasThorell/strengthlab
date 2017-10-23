import { TestBed, inject } from '@angular/core/testing';

import { CurrentSessionService } from './current-session-service';

describe('CurrentSessionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentSessionService]
    });
  });

  it('should be created', inject([CurrentSessionService], (service: CurrentSessionService) => {
    expect(service).toBeTruthy();
  }));
});

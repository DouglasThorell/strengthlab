import { TestBed, inject } from '@angular/core/testing';

import { TrainingSetService } from './training-set.service';

describe('TrainingSetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingSetService]
    });
  });

  it('should be created', inject([TrainingSetService], (service: TrainingSetService) => {
    expect(service).toBeTruthy();
  }));
});

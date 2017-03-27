import { TestBed, inject } from '@angular/core/testing';

import { ScrudServiceService } from './scrud-service.service';

describe('ScrudServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrudServiceService]
    });
  });

  it('should ...', inject([ScrudServiceService], (service: ScrudServiceService) => {
    expect(service).toBeTruthy();
  }));
});

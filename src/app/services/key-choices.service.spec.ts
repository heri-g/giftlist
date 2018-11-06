import { TestBed, inject } from '@angular/core/testing';

import { KeyChoicesService } from './key-choices.service';

describe('KeyChoicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeyChoicesService]
    });
  });

  it('should be created', inject([KeyChoicesService], (service: KeyChoicesService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { LinkmeService } from './linkme.service';

describe('LinkmeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LinkmeService]
    });
  });

  it('should be created', inject([LinkmeService], (service: LinkmeService) => {
    expect(service).toBeTruthy();
  }));
});

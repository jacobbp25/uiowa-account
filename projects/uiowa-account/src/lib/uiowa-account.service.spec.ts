import { TestBed, inject } from '@angular/core/testing';

import { UiowaAccountService } from './uiowa-account.service';

describe('UiowaAccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiowaAccountService]
    });
  });

  it('should be created', inject([UiowaAccountService], (service: UiowaAccountService) => {
    expect(service).toBeTruthy();
  }));
});

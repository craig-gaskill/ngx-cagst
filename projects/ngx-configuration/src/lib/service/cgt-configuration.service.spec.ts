import { TestBed } from '@angular/core/testing';

import { CgtConfigurationService } from './cgt-configuration.service';

describe('CgtConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CgtConfigurationService = TestBed.get(CgtConfigurationService);
    expect(service).toBeTruthy();
  });
});

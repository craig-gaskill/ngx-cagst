import { TestBed } from '@angular/core/testing';

import { CagstConfigurationService } from './cagst-configuration.service';

describe('CagstConfigurationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CagstConfigurationService = TestBed.get(CagstConfigurationService);
    expect(service).toBeTruthy();
  });
});

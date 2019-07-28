import {Injectable} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {CgtDictionaryService, CgtDictionaryServiceConfig} from './cgt-dictionary.service';

describe('CgtDictionaryService', () => {
  let service: CgtDictionaryService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        CgtDictionaryService,
        {
          provide: 'CgtDictionaryServiceConfig',
          useClass: TestDictionaryServiceConfig
        }
      ]
    });

    service  = TestBed.get(CgtDictionaryService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

@Injectable()
export class TestDictionaryServiceConfig implements CgtDictionaryServiceConfig {
  baseUrl = '';
}

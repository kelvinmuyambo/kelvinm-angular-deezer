import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { DeezerApiService } from './deezer-api.service';

describe('DeezerApiService', () => {
  let service: DeezerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(DeezerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should throw error when invalid search is provided', () => {
    expect(() => service.findArtists(null as any)).toThrowError();
    expect(() => service.findArtists(undefined as any)).toThrowError();
    expect(() => service.findArtists('')).toThrowError();
  });
});

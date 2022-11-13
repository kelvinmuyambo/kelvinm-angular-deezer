import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Artist, Pagination, Track } from '../models';
import { PaginationRequest } from '../models/pagination-request.interface';

@Injectable({
  providedIn: 'root',
})
export class DeezerApiService {
  constructor(private httpClient: HttpClient) {}

  findArtists(search: string, request?: PaginationRequest): Promise<Pagination<Artist>> {
    if (!search || search.trim().length < 3) {
      throw Error('Search query cannot be less that 2 characters');
    }

    const query = this.getRequestQueryParam(request);

    // TODO: .toPromise() depricated with new versions of rxjs
    return this.httpClient
      .get(`/api/search/artist/?q=${search}&${query}`)
      .toPromise() as Promise<Pagination<Artist>>;
  }

  getArtist(id: string): Promise<Artist> {
    // TODO: .toPromise() depricated with new versions of rxjs
    return this.httpClient
      .get(`/api/artist/${id}`)
      .toPromise() as Promise<Artist>;
  }

  getArtistTopTracks(id: string, limit = 10): Promise<Pagination<Track>> {
    // TODO: .toPromise() depricated with new versions of rxjs
    return this.httpClient
      .get(`/api/artist/${id}/top?limit=${limit}`)
      .toPromise() as Promise<Pagination<Track>>;
  }

  getArtistAlbums(id: string): Promise<Pagination<Album>> {
    // TODO: .toPromise() depricated with new versions of rxjs
    return this.httpClient
      .get(`/api/artist/${id}/albums`)
      .toPromise() as Promise<Pagination<Album>>;
  }

  getRequestQueryParam(request?: any): string{
    if (!request) { return ''; }
    return Object.keys(request).map(key => `${key}=${request[key]}`).join('&');
  }
}

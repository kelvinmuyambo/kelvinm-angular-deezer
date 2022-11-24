import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Artist, Pagination, Track } from '../models';
import { PaginationRequest } from '../models/pagination-request.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DeezerApiService {
  constructor(private httpClient: HttpClient) { }

  findArtists(search: string, request?: PaginationRequest): Observable<Pagination<Artist>> {
    if (!search || search.trim().length < 3) {
      throw Error('Search query cannot be less that 2 characters');
    }

    const query = this.getRequestQueryParam(request);
    return this.httpClient
      .get<Pagination<Artist>>(`/api/search/artist/?q=${search}&${query}`);
  }

  getArtist(id: string): Observable<Artist> {
    return this.httpClient
      .get<Artist>(`/api/artist/${id}`);
  }

  getArtistTopTracks(id: string, limit = 10): Observable<Track[]> {
    return this.httpClient
      .get<Pagination<Track>>(`/api/artist/${id}/top?limit=${limit}`)
      .pipe(map(page => page.data));
  }

  getArtistAlbums(id: string): Observable<Album[]> {
    return this.httpClient
      .get<Pagination<Album>>(`/api/artist/${id}/albums`)
      .pipe(map(page => page.data));
  }

  getRequestQueryParam(request?: any): string {
    if (!request) { return ''; }
    return Object.keys(request).map(key => `${key}=${request[key]}`).join('&');
  }
}

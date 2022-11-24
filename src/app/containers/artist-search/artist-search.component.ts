import { Component, OnInit } from '@angular/core';
import { Artist, Pagination, Track } from '../../models';
import { DeezerApiService } from 'src/app/services/deezer-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationRequest } from 'src/app/models/pagination-request.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss'],
})
export class ArtistSearchComponent implements OnInit {
  page: Pagination<Artist> | undefined;
  page$: Observable<Pagination<Artist>> = new Observable();
  showArtist = false;
  request: PaginationRequest = {
    index: 0,
    page: 1,
    limit: 24,
  };
  searchStr!: string;

  constructor(
    private service: DeezerApiService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activeRouter.params.subscribe((params) => {
      this.showArtist = !!this.activeRouter.firstChild?.snapshot.params.id;
    });
  }

  submitSearch(search: string): void {
    this.router.navigate(['/']);
    this.showArtist = false;
    this.searchStr = search;
    this.page$ = this.service.findArtists(search, this.request);
  }

  select(artist: Artist): void {
    this.showArtist = true;
    this.router.navigate([`${artist.id}`]);
  }

  pageChange(page: number): void{
    this.request.index = page - 1;
    this.submitSearch(this.searchStr);
  }
}

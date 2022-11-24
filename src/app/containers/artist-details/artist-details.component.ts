import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Album, Artist, Pagination, Track } from 'src/app/models';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit {
  artist$: Observable<Artist> | undefined;
  tracks$: Observable<Track[]> = new Observable();
  albums$: Observable<Album[]> = new Observable();

  constructor(
    private route: ActivatedRoute,
    private service: DeezerApiService
  ) {}

  ngOnInit(): void {
    this.route.params?.subscribe((param) => this.loadArtistData(param.id));
  }

  async loadArtistData(id: string): Promise<void> {
    if (!id || !id.length) {
      return;
    }
    const data = await Promise.all([
      this.service.getArtist(id),
      this.service.getArtistTopTracks(id, 5),
      this.service.getArtistAlbums(id),
    ]);
    this.artist$ = data[0];
    this.tracks$ = data[1];
    this.albums$ = data[2];
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album, Artist, Track } from 'src/app/models';
import { DeezerApiService } from 'src/app/services/deezer-api.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss'],
})
export class ArtistDetailsComponent implements OnInit {
  artist: Artist | undefined;
  tracks: Track[] = [];
  albums: Album[] = [];

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
    this.artist = data[0];
    this.tracks = data[1].data;
    this.albums = data[2].data;
  }
}

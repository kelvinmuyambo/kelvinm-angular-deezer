import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artist } from '../../models';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.scss']
})
export class ArtistsListComponent implements OnInit {
  @Output() selectArtist = new EventEmitter<Artist>();
  @Input() artists!: Artist[];
  constructor() { }

  ngOnInit(): void {
  }

}

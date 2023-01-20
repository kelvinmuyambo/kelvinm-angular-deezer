import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeezerApiService } from './services/deezer-api.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ArtistSearchComponent } from './containers/artist-search/artist-search.component';
import { FormsModule, NG_VALIDATORS } from '@angular/forms';
import { SearchValidatorDirective } from './directives/search-validator.directive';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ArtistsListComponent } from './components/artists-list/artists-list.component';
import { ArtistDetailsComponent } from './containers/artist-details/artist-details.component';
import { RouterModule } from '@angular/router';
import { AlbumsListComponent } from './components/albums-list/albums-list.component';
import { CountPipe } from './pipes/count.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ArtistSearchComponent,
    SearchValidatorDirective,
    ArtistsListComponent,
    ArtistDetailsComponent,
    AlbumsListComponent,
    CountPipe,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    RouterModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    DeezerApiService,
    {provide: NG_VALIDATORS, useExisting: SearchValidatorDirective, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

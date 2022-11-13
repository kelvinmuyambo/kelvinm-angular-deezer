import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailsComponent, ArtistSearchComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: ArtistSearchComponent,
    children: [
      {
        path: ':id',
        component: ArtistDetailsComponent,
      },
    ],
  },
  {
    path: 'artist/:id',
    component: ArtistDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

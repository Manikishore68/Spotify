import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutComponent} from './components/about/about.component';
import {AlbumComponent} from './components/album/album.component';
import {ArtistComponent} from './components/artist/artist.component';



const routes: Routes = [
  {path : '', component : HomePageComponent},
  {path : 'about', component : AboutComponent},
  {path : 'album/:id' , component : AlbumComponent},
  {path : 'artists/:id' , component : ArtistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

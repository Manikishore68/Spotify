import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public searchQuery:string = '';
  public artists:any;
  constructor(private _spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }
  //Search Aritsts
  public searchArtist(){
    this._spotifyService.getAllArtists(this.searchQuery).subscribe((response)=>{
      this.artists = response.artists.items
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  public artistID:string;
  public artist:any;
  public albums:any[];
  constructor(private _activetedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService,
              private _router:Router) { }

  ngOnInit(): void {
    // get the artist Id from the Browser URL
    this._activetedRoute.paramMap.subscribe((param: ParamMap) => {
      this.artistID = param.get('id');
    });
    // get an artist information from service / server
    this._spotifyService.getArtist(this.artistID).subscribe((response)=>{
      this.artist = response;
    });
    // get all albums of an artist from the service / server
    this._spotifyService.getAlbums(this.artistID).subscribe((response)=>{
      this.albums = response.items;
    });
  }
  // back to Home
  public backToHome(){
    this._router.navigate(['/']);
  }
}

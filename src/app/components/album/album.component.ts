import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap, Router} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public albumID:string;
  public album:any;
  public tracks:any[];
  constructor(private _activatedRoute:ActivatedRoute,
              private _spotifyService:SpotifyService,
              private _router:Router) { }

  ngOnInit(): void {
    // get an album id from the Browser URL
    this._activatedRoute.paramMap.subscribe((param : ParamMap)=>{
    this.albumID = param.get('id');
    });
    // get an album using the album ID from service / server
    this._spotifyService.getAlbum(this.albumID).subscribe((response)=>{
      this.album = response;
    });
    // get all tracks using album ID from service /  server
    this._spotifyService.getTracks(this.albumID).subscribe((response)=>{
      this.tracks = response.items;
    });
  }

  // back to Artist
  public backToArtist(album){
  this._router.navigate([`/artists/${album.artists[0].id}`]);
  };
}

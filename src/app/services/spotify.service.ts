import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private authorizationKey = ` Bearer BQAVizExr1XiUC1Wy_8Tj-URvX4m6u2_beK7IJY3dYOoNxYI48SEkt39cn1RuzEtNXonJSFBIOEF-tLiYFceYgbcuRJYWWNrxdTPjJ0hZK69iuDVdAIAngTpWx2UX8OPZgxlZkhot3VRornhiD0R7fW6FsR5z_JwlbI"`;
  private httpOptions = {
    headers : new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type' : 'application/json',
      'Authorization' : this.authorizationKey
    })
  };
  constructor( private _httpClient:HttpClient) { }

  // get all Artists

  public getAllArtists(searchQuery):Observable<any>{
  let artistUrl = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`;
  return this._httpClient.get<any>(artistUrl,this.httpOptions).pipe(
    retry(1)
  )
  }
  // get single Artist
  public getArtist(artistID):Observable<any>{
    let artistUrl = `https://api.spotify.com/v1/artists/${artistID}`;
    return this._httpClient.get<any>(artistUrl,this.httpOptions).pipe(
      retry(1)
    );
  }
  // get all albums
  public getAlbums(artistId):Observable<any>{
    let albumURL = `https://api.spotify.com/v1/artists/${artistId}/albums`;
    return this._httpClient.get<any>(albumURL,this.httpOptions).pipe(
      retry(1)
    )
  }
  // get a single album
  public getAlbum(albumId):Observable<any>{
    let albumURL = `https://api.spotify.com/v1/albums/${albumId}`;
    return this._httpClient.get<any>(albumURL,this.httpOptions).pipe(
      retry(1)
    )
  }
  // get tracks
  public getTracks(albumId):Observable<any>{
    let  trackURL = `https://api.spotify.com/v1/albums/${albumId}/tracks`;
    return this._httpClient.get<any>(trackURL,this.httpOptions).pipe(
      retry(1)
    );
  }
}



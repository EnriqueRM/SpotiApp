import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo')
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA2fKgAssmf1fyrQdfyiU5eXQuJL8J3N6gABio7z0REVGmKWG922l9xgZUBQ1ohZ-fsiXzdX2LjI5loBUhKgJLo__k9rUlB3L2ozXoon2SRw-pZLfJPSwuMNPwdl_xbtuWHtfGfYYD70KgFT3Kd2CUhiN21gEXzwg'
    })

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});

  }
}
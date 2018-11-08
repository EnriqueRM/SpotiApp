import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service listo')
  }

  getNewReleases(){

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBuTtzRukAZ6B9Wj1bAPo1CXFpQp44x76ZOL5kVvzHIeWgJo044aN-xCTm629rIja5kkDQTM3HXrdi0g0ei06b_k7B3WGtrfNiF2142CBCE0gQ3PntsE4KQFkYdSFP39D5Bnpr9aY5qxQYPsmbQ9FIeShTMLeCKtw'
    })

    this.http.get('https://api.spotify.com/v1/browse/categories?limit=5', {headers})
    .subscribe( data => {
        console.log(data)
      })
  }

}

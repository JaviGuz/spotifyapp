import { Injectable } from '@angular/core';
import { load } from '@angular/core/src/render3';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // Decorador de providedIn que permite automaticamente importar el servicio sin tener que declararlo en ep app.module
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery (query: string) {
    const url = `https://api.spotify.com/v1/${query}`;  // constante para centralizar la url


    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAywiH4pBGxxHUt4rCWMcI9ZYRMfgD6TKdd3OUyg3y5Vu4oD6Sf5dV8ES4EFhXsNoH00J39uJ_Kz0FvIWg'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
               .pipe(map(data => data['albums'].items));
  }

  getArtista(termino: string ) {

    /*return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
          .pipe(map(data => { // El operador map sirve para filtrar la información que recoges al realizar un get.
                return data['artists'].items;
              }));*/

    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
               .pipe(map(data =>  data['artists'].items)); // Cuando una función de flecha solo tiene una linea se puede poner todo en una linea y eliminar el termino return

  }

}

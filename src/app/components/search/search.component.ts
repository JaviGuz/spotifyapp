import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {

  constructor(private spotify: SpotifyService) { }

  artistas: any[] = [];

  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino)
    .subscribe((data: any) => {
        console.log(data.artists.items);
        this.artistas = data.artists.items;
    });

  }
}

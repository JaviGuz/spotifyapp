import { Component } from '@angular/core';
import { ActivatedRoute} from '@angular/router'; // para saber cual es la ruta activa
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = {};
  loadingArtist: boolean;

  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService) {
    this.loadingArtist = true;
    this.router.params.subscribe ( params => {
        this.getArtista(params['id']);
    });
   }

  getArtista(id: string) {

    this.spotify.getArtista(id)
      .subscribe( artista => {  // recoge el artista con el get.subscribe y mete el contenido en la variable artista definida anteriormente
        console.log(artista);
        this.artista = artista;
        this.loadingArtist = false;
      });

  }

}

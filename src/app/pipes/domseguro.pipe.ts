import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer ) { }

  transform( value: string): any { // value seria el uri de la cancion de spotify
    const url = 'https://open.spotify.com/embed?uri=';
    return this.domSanitizer.bypassSecurityTrustResourceUrl( url + value ); // objeto que se encarga de comprobar que la url no es malicioso para la aplicacion
  }                                                                         // Concatena la url que se necesita

}

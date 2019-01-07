import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/img/noimage-png';  /* No pone el path desde la carpeta pipes con ../../ porque el path relativo empieza desde el index.html */
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
       return 'assets/img/noimage.png';
    }
    return null;
  }

}

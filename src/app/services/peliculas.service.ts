import { Injectable } from '@angular/core';

import { Jsonp } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PeliculasService {

  private apikey: string = '34094afdc2ea99553ba9d8011fe802a4';
  private urlMoviedb: string = 'https://api.themoviedb.org/3';

  constructor( private jsonp:Jsonp ) { }

  getPopulares() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK` ;

    // Las peticiones http normalmente son asi: return this.http.get(url).pipe(map( respuesta => respuesta.json()) );
    // pero como esto es una peticion entre dominios y la pagina no permite peticiones http entonces la solución es cambiar http por jsonp
    // y por esto es necesario que la url que se mande termine con &callback=JSONP_CALLBACK
    return this.jsonp.get(url).pipe(map( respuesta => respuesta.json()) );
  }

  getEstrenos() {

    // tslint:disable-next-line: max-line-length
    const url = `${this.urlMoviedb}/discover/movie?primary_release_date.gte=2019-09-19&primary_release_date.lte=2019-10-19&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map( respuesta => respuesta.json()) );

  }

  getPelicula(id: string) {

    const url = `${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map( respuesta => respuesta.json()) );
  }

  buscarPelicula( texto: string ){
    const url = `${this.urlMoviedb}/search/movie?api_key=${this.apikey}&query=${texto}&callback=JSONP_CALLBACK`;

    return this.jsonp.get(url).pipe(map( respuesta => respuesta.json()) );
  }
}

import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;

  constructor( public peliculasService: PeliculasService, public route: ActivatedRoute, private location: Location) {
    this.route.params.subscribe( parametros => {
      console.log(parametros);
      this.verDatos(parametros['id']);
    });
    
   }

  ngOnInit() {
  }

  verDatos( id: string ) {
    this.peliculasService.getPelicula(id).subscribe( (resultado: any) => {
      console.log(resultado);
      this.pelicula = resultado;
    }, (error) => {
      console.log(error);
    });
  }

  volverAtras(){
    this.location.back();
  }

}

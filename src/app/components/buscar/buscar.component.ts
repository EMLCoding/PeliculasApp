import { Component } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent{

  peliculasEncontradas: any[] = [];
  buscar = '';
  hayDatos: boolean;
  cargando: boolean;

  constructor( public peliculasService: PeliculasService, private router:Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      if( parametros['texto']){
        this.buscar = parametros['texto'];
        this.buscarPelicula();
      }
    })
  }

  buscarPelicula(){
    this.peliculasService.buscarPelicula(this.buscar).subscribe( (resultado: any) => {
      this.cargando = true;
      this.peliculasEncontradas = resultado.results;
      console.log("BUSCADOR", this.peliculasEncontradas);
      this.cargando = false;
      if( this.peliculasEncontradas.length <=0 ){
        this.hayDatos = false;
      }else{
        this.hayDatos = true;
      }
    }, (error) => {
      console.log('Error al buscar pelicula');
      this.cargando = false;
      this.hayDatos = false;
    });
  }

    // Con este metodo se recoge el id de la pelicula a la que hemos pulsado y se envia al router
    verPelicula(item:any){
      const peliculaId = item.id;
  
      // Con esta línea se envía al router y en app-routing.module tiene que estar como path: 'pelicula/:id',
      this.router.navigate ( [ '/pelicula',peliculaId]);
    }



}

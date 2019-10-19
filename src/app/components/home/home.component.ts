import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listadoPopulares: any[] = [];
  listadoEstrenos: any[] = [];

  constructor(public peliculasService: PeliculasService, private router:Router) {
    this.verPopulares();
    this.verEstrenos();
   }

  ngOnInit() {}

  verPopulares() {
    this.peliculasService.getPopulares().subscribe( (resultado: any) => {
      console.log('Peliculas Populares:', resultado.results);
      this.listadoPopulares = resultado.results;
    }, (errorCarga) => {
      console.log('Los peliculas populares no se han cargado correctamente');
    });
  }

  verEstrenos() {
    this.peliculasService.getEstrenos().subscribe( (resultado: any) => {
      this.listadoEstrenos = resultado.results;
      console.log('Estrenos:', resultado.results);
    }, (errorCarga) => {
      console.log('Los estrenos no se han cargado correctamente');
    });
  }

  // Con este metodo se recoge el id de la pelicula a la que hemos pulsado y se envia al router
  verPelicula(item:any){
    const peliculaId = item.id;

    // Con esta línea se envía al router y en app-routing.module tiene que estar como path: 'pelicula/:id',
    this.router.navigate ( [ '/pelicula',peliculaId]);
  }

}

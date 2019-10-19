import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { BuscarComponent } from './components/buscar/buscar.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pelicula/:id', component: PeliculaComponent},
  { path: 'search', component: BuscarComponent},
  { path: 'search/:texto', component: BuscarComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}, /* Cualquier otro path redirecciona al home */
  { path: '**', pathMatch: 'full', redirectTo: 'home'} /* Cualquier otro path redirecciona al home */

]

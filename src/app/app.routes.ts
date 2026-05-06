import { Routes } from '@angular/router';
import { ClasificacionComponent } from './components/clasificacion/clasificacion.component';
import { PartidosComponent } from './components/partidos/partidos.component';
import { EquiposComponent } from './components/equipos/equipos.component';

export const routes: Routes = [
  { path: '', redirectTo: 'clasificacion', pathMatch: 'full' },
  { path: 'clasificacion', component: ClasificacionComponent },
  { path: 'partidos', component: PartidosComponent },
  { path: 'equipos', component: EquiposComponent },
];
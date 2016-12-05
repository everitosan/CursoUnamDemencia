import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/HomeComponent';
import { InfoComponent } from './components/info/info-component';

import {IntroduccionComponent} from './components/htmls/introduccion/Introduccion.component';
import {PresentacionComponent} from './components/htmls/presentacion/Presentacion.component';
import {DemenciaComponent} from './components/htmls/demenciayfragilidad/Demencia.component';
import {CuidadosComponent} from './components/htmls/cuidadosfisicos/Cuidados.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'introduccion', component: IntroduccionComponent},
  {path: 'demenciayfragilidad', component: DemenciaComponent},
  {path: 'cuidadosfisicos', component: CuidadosComponent}
];

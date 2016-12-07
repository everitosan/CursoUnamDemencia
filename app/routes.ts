import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/HomeComponent';
import { InfoComponent } from './components/info/info-component';

import {IntroduccionComponent} from './components/htmls/introduccion/Introduccion.component';
import {PresentacionComponent} from './components/htmls/presentacion/Presentacion.component';
import {DemenciaComponent} from './components/htmls/demenciayfragilidad/Demencia.component';
import {CuidadosComponent} from './components/htmls/cuidadosfisicos/Cuidados.component';
import {AyudasComponent} from './components/htmls/ayudastecnicas/ayudas.component';
import {CuidadorComponent} from './components/htmls/cuidadocuidador/cuidador.component';
import {RecomendacionesComponent} from './components/htmls/recomendacionesysugerencias/recomendaciones.component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'presentacion', component: PresentacionComponent},
  {path: 'introduccion', component: IntroduccionComponent},
  {path: 'demenciayfragilidad', component: DemenciaComponent},
  {path: 'cuidadosfisicos', component: CuidadosComponent},
  {path: 'ayudastecnicas', component: AyudasComponent},
  {path: 'cuidador', component: CuidadorComponent},
  {path: 'recomendaciones', component: RecomendacionesComponent}
];

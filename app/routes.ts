import {Routes} from '@angular/router';
import { HomeComponent } from './components/home/HomeComponent';
import { InfoComponent } from './components/info/info-component';

export const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'info/:id', component: InfoComponent}
];

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MainMenu } from './components/menu/app.mainmenu';
import { InfoComponent } from './components/info/info-component';
import {HomeComponent} from './components/home/HomeComponent';
import { SliderComponent } from './components/slider/slider-component';


import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MainMenu,
    InfoComponent,
    HomeComponent,
    SliderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

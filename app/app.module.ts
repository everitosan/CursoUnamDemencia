import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

//Components
import { AppComponent }  from './app.component';
import { MainMenu } from './components/menu/app.mainmenu';
import { HomeComponent } from './components/home/HomeComponent';
import { SliderComponent } from './components/slider/slider-component';
import { SectionMenu } from './components/section-menu/section-menu.component';
import { Linker } from './components/linker/linker.component';
import { SoundComponent } from './components/audio/audio.component';

//Content components
import {IntroduccionComponent} from './components/htmls/introduccion/Introduccion.component';
import {PresentacionComponent} from './components/htmls/presentacion/Presentacion.component';
import {DemenciaComponent} from './components/htmls/demenciayfragilidad/Demencia.component';
import {CuidadosComponent} from './components/htmls/cuidadosfisicos/Cuidados.component';
import {AyudasComponent} from './components/htmls/ayudastecnicas/ayudas.component';
import {CuidadorComponent} from './components/htmls/cuidadocuidador/cuidador.component';
import {RecomendacionesComponent} from './components/htmls/recomendacionesysugerencias/recomendaciones.component';

//Services
import {InfoDataService} from './services/info-data.service';
import {SectionMenuService} from './services/section-menu.service';


//Routes
import { RouterModule } from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    MainMenu,
    HomeComponent,
    SliderComponent,
    SectionMenu,
    Linker,
    SoundComponent,
    IntroduccionComponent,
    PresentacionComponent,
    DemenciaComponent,
    CuidadosComponent,
    AyudasComponent,
    CuidadorComponent,
    RecomendacionesComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [InfoDataService, SectionMenuService]
})
export class AppModule { }

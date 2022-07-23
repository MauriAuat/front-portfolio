import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DataPersonalComponent } from './componentes/data-personal/data-personal.component';
import { LoginComponent } from './componentes/login/login.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';
import { ModalComponent } from './componentes/modal/modal.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { BodyComponent } from './componentes/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataPersonalComponent,
    LoginComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    TecnologiaComponent,
    ProyectosComponent,
    FooterComponent,
    ModalComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}

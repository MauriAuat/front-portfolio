import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { DataPersonalComponent } from './componentes/data-personal/data-personal.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';

import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './componentes/footer/footer.component';

import { NgCircleProgressModule } from 'ng-circle-progress';
import { BodyComponent } from './componentes/body/body.component';
import { RegistroComponent } from './componentes/auth/registro.component';
import { Login2Component } from './componentes/auth/login2.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { interceptorProvider } from './interceptors/persona-interceptor.service';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { NuevaTecnologiaComponent } from './componentes/tecnologia/nueva-tecnologia.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp.component';
import { EdicionExpComponent } from './componentes/experiencia/edicion-exp.component';
import { EdicionEducacionComponent } from './componentes/educacion/edicion-educacion.component';
import { EdicionProyectoComponent } from './componentes/proyectos/edicion-proyecto.component';
import { EdicionTecnologiaComponent } from './componentes/tecnologia/edicion-tecnologia.component';
import { EdicionDataPersonalComponent } from './componentes/data-personal/edicion-data-personal.component';
import { EdicionDomicilioComponent } from './componentes/footer/edicion-domicilio.component';
import { NuevoDomicilioComponent } from './componentes/footer/nuevo-domicilio.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataPersonalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    TecnologiaComponent,
    ProyectosComponent,
    FooterComponent,
    BodyComponent,
    Login2Component,
    RegistroComponent,
    MenuComponent,
    NuevaEducacionComponent,
    NuevoProyectoComponent,
    NuevaTecnologiaComponent,
    NuevaExpComponent,
    EdicionExpComponent,
    EdicionEducacionComponent,
    EdicionProyectoComponent,
    EdicionTecnologiaComponent,
    EdicionDataPersonalComponent,
    EdicionDomicilioComponent,
    NuevoDomicilioComponent,
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
  exports: [FormsModule],
  providers: [CookieService, interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}

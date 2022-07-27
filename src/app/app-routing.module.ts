import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './componentes/auth/login2.component';
import { RegistroComponent } from './componentes/auth/registro.component';
import { BodyComponent } from './componentes/body/body.component';
import { EdicionDataPersonalComponent } from './componentes/data-personal/edicion-data-personal.component';
import { EdicionEducacionComponent } from './componentes/educacion/edicion-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { EdicionExpComponent } from './componentes/experiencia/edicion-exp.component';
import { NuevaExpComponent } from './componentes/experiencia/nueva-exp.component';
import { EdicionDomicilioComponent } from './componentes/footer/edicion-domicilio.component';
import { NuevoDomicilioComponent } from './componentes/footer/nuevo-domicilio.component';
import { EdicionProyectoComponent } from './componentes/proyectos/edicion-proyecto.component';
import { NuevoProyectoComponent } from './componentes/proyectos/nuevo-proyecto.component';
import { EdicionTecnologiaComponent } from './componentes/tecnologia/edicion-tecnologia.component';
import { NuevaTecnologiaComponent } from './componentes/tecnologia/nueva-tecnologia.component';

const routes: Routes = [
  /* -----  Ruta de Inicio  ----- */
  { path: '', component: BodyComponent },
  /* -----  Ruta de Login  ----- */
  { path: 'login', component: Login2Component },
  /* -----  Rutas de Agregacion de elementos  ----- */
  { path: 'new-exp', component: NuevaExpComponent },
  { path: 'new-edu', component: NuevaEducacionComponent },
  { path: 'new-proyect', component: NuevoProyectoComponent },
  { path: 'new-tecno', component: NuevaTecnologiaComponent },
  { path: 'new-domi', component: NuevoDomicilioComponent },
  /* -----  Rutas de Edicion de elementos  ----- */
  { path: 'edit-exp/:id', component: EdicionExpComponent },
  { path: 'edit-edu/:id', component: EdicionEducacionComponent },
  { path: 'edit-pro/:id', component: EdicionProyectoComponent },
  { path: 'edit-tecno/:id', component: EdicionTecnologiaComponent },
  { path: 'edit-data-pers/:id', component: EdicionDataPersonalComponent },
  { path: 'edit-domi/:id', component: EdicionDomicilioComponent },
  /* -----  Rutas de Vista Detalle de elementos  ----- */

  /* -----  Ruta de coincidencia por defecto  ----- */
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

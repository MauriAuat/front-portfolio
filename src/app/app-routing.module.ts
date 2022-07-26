import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login2Component } from './componentes/auth/login2.component';
import { RegistroComponent } from './componentes/auth/registro.component';
import { BodyComponent } from './componentes/body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: Login2Component },
  { path: 'registro', component: RegistroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

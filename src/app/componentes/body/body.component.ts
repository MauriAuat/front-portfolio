import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  title = 'porftolioTF';

  persona: Persona = new Persona(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [],
    [],
    [],
    [],
    []
  );
  toogle: boolean = false;
  log: boolean = false;
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false;
  nombreUsuario: string = '';
  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName()!;
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
          //console.log(this.tokenService.getUserName());
        }
      });
      const id = 1;
      this.personaService.traerPersona(id).subscribe((data) => {
        console.log('hola');
        this.persona = data;
      });
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }

  toogleChange() {
    this.toogle = !this.toogle;
  }

  loginOff() {
    if (this.log) this.log = !this.log;
  }

  loginOn() {
    if (!this.log) this.log = !this.log;
  }
}

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

  persona: Persona = {
    id_pers: 0,
    nombre: '',
    apellido: '',
    titulo: '',
    resumen: '',
    foto: '',
    bannerPersonal: '',
    redSocial1: '',
    redSocial2: '',
    doms: [],
    edus: [],
    exp_laboral: [],
    proyectos: [],
    tecnologias: [],
  };
  toogle: boolean = false;
  log: boolean = false;
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false;
  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach((rol) => {
        if (rol === 'ROLE_ADMIN') {
          this.isAdmin = true;
          console.log(this.tokenService.getUserName());
        }
      });
      const id = 1;
      this.personaService.traerPersona(id).subscribe((persona) => {
        console.log('hola');
        this.persona = persona;
      });
    } else {
      this.isLogged = false;
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

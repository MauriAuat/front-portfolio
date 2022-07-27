import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { TokenService } from 'src/app/servicios/token.service';
import Swal from 'sweetalert2';

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
        }
      });
      const id = 1;
      this.personaService.traerPersona(id).subscribe(
        (data) => {
          this.persona = data;
        },
        (err) => {
          Swal.fire({
            text: 'Error al cargar datos!',
            icon: 'error',
            iconColor: '#ddd',
            position: 'top',
            background: '#c43725',
            color: '#ddd',
            width: 400,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    } else {
      this.isLogged = false;
      this.nombreUsuario = '';
    }
  }
}

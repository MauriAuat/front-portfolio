import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

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

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.traerPersona(1).subscribe((persona) => {
      console.log(persona.doms);
      this.persona = persona;
    });
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

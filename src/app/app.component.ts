import { Component, OnInit } from '@angular/core';
import { Persona } from './modelos/persona';
import { PersonaService } from './servicios/persona/persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
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

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.traerPersona(1).subscribe((persona) => {
      console.log(persona.doms);
      this.persona = persona;
    });
  }
}

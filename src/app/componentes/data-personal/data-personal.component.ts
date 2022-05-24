import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styleUrls: ['./data-personal.component.css'],
})
export class DataPersonalComponent implements OnInit {
  persona: Persona = {
    id_pers: 0,
    nombre: '',
    apellido: '',
    titulo: '',
    resumen: '',
    foto: '',
    bannerPersonal: '',
  };
  toogle: boolean = false;
  @Output() infoPersona = new EventEmitter<Persona>();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.traerPersona(1).subscribe((persona) => {
      this.persona = persona;
    });
  }
  editar() {
    this.toogle = !this.toogle;
    /*  this.personaService.actualizarPersona(this.persona).subscribe((persona) => {
      this.persona = persona;
    });*/
  }
  enviarInfoPersona(persona: Persona) {
    this.infoPersona.emit(persona);
  }
}

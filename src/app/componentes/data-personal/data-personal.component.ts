import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styleUrls: ['./data-personal.component.css'],
})
export class DataPersonalComponent implements OnInit {
  personas: Persona[] = [];
  @Output() infoPersona = new EventEmitter<Persona>();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.traerListaPersona().subscribe((personas) => {
      this.personas = personas;
    });
  }

  enviarInfoPersona(persona: Persona) {
    this.infoPersona.emit(persona);
  }
}

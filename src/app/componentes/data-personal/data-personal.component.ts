import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styleUrls: ['./data-personal.component.css'],
})
export class DataPersonalComponent implements OnInit {
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.traerListaPersona().subscribe((personas) => {
      this.personas = personas;
    });
  }
}

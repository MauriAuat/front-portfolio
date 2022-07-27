import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-data-personal',
  templateUrl: './data-personal.component.html',
  styleUrls: ['./data-personal.component.css'],
})
export class DataPersonalComponent implements OnInit {
  @Input() persona: Persona = {
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
  //toogle: boolean = false;
  @Input() permis = false;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {}
}

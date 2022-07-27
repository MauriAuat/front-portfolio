import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { UsuarioService } from 'src/app/servicios/usuario/usuario.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
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
  @Input() permis: boolean = false;
  edit: boolean = false;

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {}

  onEdit(): void {
    this.edit = !this.edit;
  }

  editarResumen() {
    this.edit = !this.edit;
    this.personaService.actualizarPersona(this.persona).subscribe((persona) => {
      persona = persona;
    });
  }
}

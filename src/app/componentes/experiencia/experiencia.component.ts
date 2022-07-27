import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { ExperienciaService } from 'src/app/servicios/exp/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  @Input() persona: Persona = {
    id_pers: 1,
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
  @Input() permis = false;
  constructor(private expService: ExperienciaService, private router: Router) {}

  ngOnInit(): void {}

  onDelete(id: number, index: number): void {
    this.expService.borrarExperiencia(id).subscribe(
      (data) => {
        this.persona.exp_laboral.splice(index, 1);
        window.location.reload();
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}

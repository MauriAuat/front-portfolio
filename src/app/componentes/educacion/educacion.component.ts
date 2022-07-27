import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
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
  @Input() permis: boolean = false;
  constructor(private eduService: EducacionService, private router: Router) {}

  ngOnInit(): void {}
  onDelete(id: number, index: number) {
    this.eduService.borrarEducacion(id).subscribe(
      (data) => {
        this.persona.edus.splice(index, 1);
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}

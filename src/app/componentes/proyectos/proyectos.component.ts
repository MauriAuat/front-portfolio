import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { ProyectosService } from 'src/app/servicios/proyecto/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
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
  constructor(private proService: ProyectosService) {}

  ngOnInit(): void {}
  onDelete(id: number, index: number): void {
    this.proService.borrarProyecto(id).subscribe(
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

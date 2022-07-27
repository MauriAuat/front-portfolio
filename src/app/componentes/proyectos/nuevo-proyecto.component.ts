import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { Proyecto } from 'src/app/modelos/proyecto';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { ProyectosService } from 'src/app/servicios/proyecto/proyectos.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  id_proyecto: number = 0;
  nombre_proyecto: string = '';
  fecha_activo: string = '';
  descripcion: string = '';
  link_proyecto: string = '';
  imagen_muestra: string = '';
  persona!: Persona;

  constructor(
    private personaService: PersonaService,
    private proyectoService: ProyectosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaService.traerPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }

  onCreate(): void {
    const proyecto = new Proyecto(
      this.id_proyecto,
      this.nombre_proyecto,
      this.fecha_activo,
      this.descripcion,
      this.link_proyecto,
      this.imagen_muestra,
      this.persona
    );

    this.proyectoService.guardarProyecto(proyecto).subscribe(
      (data) => {
        alert('Proyecto guardada!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

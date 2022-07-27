import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { Proyecto } from 'src/app/modelos/proyecto';
import { ProyectosService } from 'src/app/servicios/proyecto/proyectos.service';

@Component({
  selector: 'app-edicion-proyecto',
  templateUrl: './edicion-proyecto.component.html',
  styleUrls: ['./edicion-proyecto.component.css'],
})
export class EdicionProyectoComponent implements OnInit {
  persona: Persona = new Persona(
    1,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    [],
    [],
    [],
    [],
    []
  );
  proyecto: Proyecto = new Proyecto(0, '', '', '', '', '', this.persona);
  constructor(
    private proService: ProyectosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proService.traerProyectos(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proService.actualizarProyecto(this.proyecto).subscribe(
      (data) => {
        alert('Experiencia');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

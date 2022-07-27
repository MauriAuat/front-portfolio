import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { Persona } from 'src/app/modelos/persona';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';

@Component({
  selector: 'app-edicion-educacion',
  templateUrl: './edicion-educacion.component.html',
  styleUrls: ['./edicion-educacion.component.css'],
})
export class EdicionEducacionComponent implements OnInit {
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
  edu: Educacion = new Educacion(0, '', '', '', '', '', this.persona);
  constructor(
    private eduService: EducacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduService.traerEducacion(id).subscribe(
      (data) => {
        this.edu = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.eduService.actualizarEducacion(this.edu).subscribe(
      (data) => {
        alert('Educacion');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

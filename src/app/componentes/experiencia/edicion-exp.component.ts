import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/modelos/experiencia-laboral';
import { Persona } from 'src/app/modelos/persona';
import { ExperienciaService } from 'src/app/servicios/exp/experiencia.service';

@Component({
  selector: 'app-edicion-exp',
  templateUrl: './edicion-exp.component.html',
  styleUrls: ['./edicion-exp.component.css'],
})
export class EdicionExpComponent implements OnInit {
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
  exp: ExperienciaLaboral = new ExperienciaLaboral(
    0,
    '',
    '',
    '',
    '',
    '',
    '',
    this.persona
  );

  constructor(
    private expService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.traerExperiencia(id).subscribe(
      (data) => {
        this.exp = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.actualizarExperiencia(this.exp).subscribe(
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

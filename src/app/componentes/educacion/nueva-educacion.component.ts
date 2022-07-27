import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/modelos/educacion';
import { Persona } from 'src/app/modelos/persona';
import { EducacionService } from 'src/app/servicios/educacion/educacion.service';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent implements OnInit {
  id_edu: number = 0;
  fecha_egreso!: string;
  fecha_ingreso!: string;
  logo_inst!: string;
  nombre_inst!: string;
  titulo!: string;
  persona!: Persona;
  constructor(
    private personaService: PersonaService,
    private eduService: EducacionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaService.traerPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }
  onCreate(): void {
    const edu = new Educacion(
      this.id_edu,
      this.fecha_egreso,
      this.fecha_ingreso,
      this.logo_inst,
      this.nombre_inst,
      this.titulo,
      this.persona
    );
    console.log(edu.persona);
    this.eduService.guardarEducacion(edu).subscribe(
      (data) => {
        alert('Educacion guardada!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

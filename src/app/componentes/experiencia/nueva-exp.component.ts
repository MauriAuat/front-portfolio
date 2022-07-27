import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExperienciaLaboral } from 'src/app/modelos/experiencia-laboral';
import { Persona } from 'src/app/modelos/persona';
import { ExperienciaService } from 'src/app/servicios/exp/experiencia.service';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-nueva-exp',
  templateUrl: './nueva-exp.component.html',
  styleUrls: ['./nueva-exp.component.css'],
})
export class NuevaExpComponent implements OnInit {
  id_exp: number = 0;
  cargo: string = '';
  empresa: string = '';
  logo_Empresa: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  descripcion: string = '';
  persona!: Persona;

  constructor(
    private personaService: PersonaService,
    private expService: ExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaService.traerPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }

  onCreate(): void {
    const exp = new ExperienciaLaboral(
      this.id_exp,
      this.cargo,
      this.empresa,
      this.logo_Empresa,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion,
      this.persona
    );
    console.log(exp.persona);
    this.expService.guardarExperiencia(exp).subscribe(
      (data) => {
        alert('Experiencia guardada!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

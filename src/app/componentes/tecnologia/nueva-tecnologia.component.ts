import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { TecnologiasService } from 'src/app/servicios/tecnologia/tecnologias.service';

@Component({
  selector: 'app-nueva-tecnologia',
  templateUrl: './nueva-tecnologia.component.html',
  styleUrls: ['./nueva-tecnologia.component.css'],
})
export class NuevaTecnologiaComponent implements OnInit {
  id_tecno: number = 0;
  nombre_tecno: string = '';
  nivel: number = 0;
  persona!: Persona;
  constructor(
    private personaService: PersonaService,
    private tecnoService: TecnologiasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaService.traerPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }

  onCreate(): void {
    const tecno = new Tecnologia(
      this.id_tecno,
      this.nombre_tecno,
      this.nivel,
      this.persona
    );

    this.tecnoService.guardarTecnologia(tecno).subscribe(
      (data) => {
        alert('Tecnologia guardada!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

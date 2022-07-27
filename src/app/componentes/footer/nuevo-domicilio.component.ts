import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Domicilio } from 'src/app/modelos/domicilio';
import { Persona } from 'src/app/modelos/persona';
import { DomicilioService } from 'src/app/servicios/domicilio/domicilio.service';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-nuevo-domicilio',
  templateUrl: './nuevo-domicilio.component.html',
  styleUrls: ['./nuevo-domicilio.component.css'],
})
export class NuevoDomicilioComponent implements OnInit {
  id_domi: number = 0;
  direccion: string = '';
  persona!: Persona;
  constructor(
    private personaService: PersonaService,
    private domiService: DomicilioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = 1;
    this.personaService.traerPersona(id).subscribe((data) => {
      this.persona = data;
    });
  }

  onCreate(): void {
    const domi = new Domicilio(this.id_domi, this.direccion, this.persona);

    this.domiService.guardarDomicilio(domi).subscribe(
      (data) => {
        alert('Domicilio guardado!');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

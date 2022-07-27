import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { PersonaService } from 'src/app/servicios/persona/persona.service';

@Component({
  selector: 'app-edicion-data-personal',
  templateUrl: './edicion-data-personal.component.html',
  styleUrls: ['./edicion-data-personal.component.css'],
})
export class EdicionDataPersonalComponent implements OnInit {
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
  constructor(
    private persService: PersonaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persService.traerPersona(id).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.persService.actualizarPersona(this.persona).subscribe(
      (data) => {
        alert('Persona Actualizada');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

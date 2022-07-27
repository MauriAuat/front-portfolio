import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Domicilio } from 'src/app/modelos/domicilio';
import { Persona } from 'src/app/modelos/persona';
import { DomicilioService } from 'src/app/servicios/domicilio/domicilio.service';

@Component({
  selector: 'app-edicion-domicilio',
  templateUrl: './edicion-domicilio.component.html',
  styleUrls: ['./edicion-domicilio.component.css'],
})
export class EdicionDomicilioComponent implements OnInit {
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
  domi: Domicilio = new Domicilio(0, '', this.persona);
  constructor(
    private domiService: DomicilioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.domiService.traerDomicilio(id).subscribe(
      (data) => {
        this.domi = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.domiService.actualizarDomicilio(this.domi).subscribe(
      (data) => {
        alert('Domicilio editado');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

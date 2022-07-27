import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';
import { Tecnologia } from 'src/app/modelos/tecnologia';
import { TecnologiasService } from 'src/app/servicios/tecnologia/tecnologias.service';

@Component({
  selector: 'app-edicion-tecnologia',
  templateUrl: './edicion-tecnologia.component.html',
  styleUrls: ['./edicion-tecnologia.component.css'],
})
export class EdicionTecnologiaComponent implements OnInit {
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
  tecnologia: Tecnologia = new Tecnologia(0, '', 0, this.persona);
  constructor(
    private tecnoService: TecnologiasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnoService.traerTecnologia(id).subscribe(
      (data) => {
        this.tecnologia = data;
      },
      (err) => {
        console.log(err.message);
      }
    );
  }

  onEdit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnoService.actualizarTecnologia(this.tecnologia).subscribe(
      (data) => {
        alert('Tecnologia');
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}

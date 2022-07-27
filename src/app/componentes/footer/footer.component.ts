import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';
import { DomicilioService } from 'src/app/servicios/domicilio/domicilio.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  @Input() persona: Persona = {
    id_pers: 1,
    nombre: '',
    apellido: '',
    titulo: '',
    resumen: '',
    foto: '',
    bannerPersonal: '',
    redSocial1: '',
    redSocial2: '',
    doms: [],
    edus: [],
    exp_laboral: [],
    proyectos: [],
    tecnologias: [],
  };
  @Input() permis = false;
  constructor(private domiService: DomicilioService) {}

  ngOnInit(): void {}
  onDelete(id: number, index: number): void {
    this.domiService.borrarDomicilio(id).subscribe(
      (data) => {
        this.persona.exp_laboral.splice(index, 1);
        window.location.reload();
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
}

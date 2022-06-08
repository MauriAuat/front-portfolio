import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelos/persona';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() persona: Persona = {
    id_pers: 0,
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

  color: string = '';
  @Output() btnToogle = new EventEmitter();
  toogle: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.toogle = !this.toogle;
    this.btnToogle.emit();
    console.log(this.toogle);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionTecnologiaComponent } from './edicion-tecnologia.component';

describe('EdicionTecnologiaComponent', () => {
  let component: EdicionTecnologiaComponent;
  let fixture: ComponentFixture<EdicionTecnologiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionTecnologiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionTecnologiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

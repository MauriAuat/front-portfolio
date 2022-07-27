import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDomicilioComponent } from './edicion-domicilio.component';

describe('EdicionDomicilioComponent', () => {
  let component: EdicionDomicilioComponent;
  let fixture: ComponentFixture<EdicionDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

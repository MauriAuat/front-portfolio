import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDomicilioComponent } from './nuevo-domicilio.component';

describe('NuevoDomicilioComponent', () => {
  let component: NuevoDomicilioComponent;
  let fixture: ComponentFixture<NuevoDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

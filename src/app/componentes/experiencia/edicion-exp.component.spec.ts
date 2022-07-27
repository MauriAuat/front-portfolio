import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionExpComponent } from './edicion-exp.component';

describe('EdicionExpComponent', () => {
  let component: EdicionExpComponent;
  let fixture: ComponentFixture<EdicionExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionExpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

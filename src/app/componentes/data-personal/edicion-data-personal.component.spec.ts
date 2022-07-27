import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDataPersonalComponent } from './edicion-data-personal.component';

describe('EdicionDataPersonalComponent', () => {
  let component: EdicionDataPersonalComponent;
  let fixture: ComponentFixture<EdicionDataPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicionDataPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDataPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

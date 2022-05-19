import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPersonalComponent } from './data-personal.component';

describe('DataPersonalComponent', () => {
  let component: DataPersonalComponent;
  let fixture: ComponentFixture<DataPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataPersonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

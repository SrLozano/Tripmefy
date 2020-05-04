import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilViajeroComponent } from './perfil-viajero.component';

describe('PerfilViajeroComponent', () => {
  let component: PerfilViajeroComponent;
  let fixture: ComponentFixture<PerfilViajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilViajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

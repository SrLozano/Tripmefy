import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuacionPuComponent } from './puntuacion-pu.component';

describe('PuntuacionPuComponent', () => {
  let component: PuntuacionPuComponent;
  let fixture: ComponentFixture<PuntuacionPuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuntuacionPuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuacionPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

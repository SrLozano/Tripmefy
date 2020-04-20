import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirImagenComponent } from './pedir-imagen.component';

describe('PedirImagenComponent', () => {
  let component: PedirImagenComponent;
  let fixture: ComponentFixture<PedirImagenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirImagenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

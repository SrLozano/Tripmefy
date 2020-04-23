import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioPuComponent } from './comentario-pu.component';

describe('ComentarioPuComponent', () => {
  let component: ComentarioPuComponent;
  let fixture: ComponentFixture<ComentarioPuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioPuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseCiudadComponent } from './unirse-ciudad.component';

describe('UnirseCiudadComponent', () => {
  let component: UnirseCiudadComponent;
  let fixture: ComponentFixture<UnirseCiudadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseCiudadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

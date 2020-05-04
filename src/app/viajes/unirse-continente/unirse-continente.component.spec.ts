import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirseContinenteComponent } from './unirse-continente.component';

describe('UnirseContinenteComponent', () => {
  let component: UnirseContinenteComponent;
  let fixture: ComponentFixture<UnirseContinenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirseContinenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirseContinenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

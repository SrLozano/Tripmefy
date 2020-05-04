import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionPuComponent } from './edicion-pu.component';

describe('EdicionPuComponent', () => {
  let component: EdicionPuComponent;
  let fixture: ComponentFixture<EdicionPuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionPuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionPuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

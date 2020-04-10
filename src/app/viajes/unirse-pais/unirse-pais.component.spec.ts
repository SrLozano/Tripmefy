import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnirsePaisComponent } from './unirse-pais.component';

describe('UnirsePaisComponent', () => {
  let component: UnirsePaisComponent;
  let fixture: ComponentFixture<UnirsePaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnirsePaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirsePaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

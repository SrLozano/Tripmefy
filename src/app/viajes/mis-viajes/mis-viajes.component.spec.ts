import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisViajesComponent } from './mis-viajes.component';

describe('MisViajesComponent', () => {
  let component: MisViajesComponent;
  let fixture: ComponentFixture<MisViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

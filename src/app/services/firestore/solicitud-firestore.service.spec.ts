import { TestBed } from '@angular/core/testing';

import { SolicitudFirestoreService } from './solicitud-firestore.service';

describe('SolicitudFirestoreService', () => {
  let service: SolicitudFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitudFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

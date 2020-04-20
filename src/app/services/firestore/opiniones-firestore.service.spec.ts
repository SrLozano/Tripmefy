import { TestBed } from '@angular/core/testing';

import { OpinionesFirestoreService } from './opiniones-firestore.service';

describe('OpinionesFirestoreService', () => {
  let service: OpinionesFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionesFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

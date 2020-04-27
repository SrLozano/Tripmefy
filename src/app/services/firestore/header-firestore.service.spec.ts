import { TestBed } from '@angular/core/testing';

import { HeaderFirestoreService } from './header-firestore.service';

describe('HeaderFirestoreService', () => {
  let service: HeaderFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

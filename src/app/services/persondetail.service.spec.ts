import { TestBed } from '@angular/core/testing';

import { PersondetailService } from './persondetail.service';

describe('PersondetailService', () => {
  let service: PersondetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersondetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

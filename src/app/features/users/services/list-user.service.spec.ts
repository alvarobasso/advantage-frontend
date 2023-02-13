import { TestBed } from '@angular/core/testing';

import { ListDataService } from './list-user.service';

describe('ListDataService', () => {
  let service: ListDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

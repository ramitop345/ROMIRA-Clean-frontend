import { TestBed } from '@angular/core/testing';

import { ClientsStorageService } from './clients-storage.service';

describe('ClientsStorageService', () => {
  let service: ClientsStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientsStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

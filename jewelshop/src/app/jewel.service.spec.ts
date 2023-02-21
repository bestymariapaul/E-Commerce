import { TestBed } from '@angular/core/testing';

import { JewelService } from './jewel.service';

describe('JewelService', () => {
  let service: JewelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JewelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

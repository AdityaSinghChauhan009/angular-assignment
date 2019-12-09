import { TestBed } from '@angular/core/testing';

import { TabularComponentService } from './tabular-component.service';

describe('TabularComponentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TabularComponentService = TestBed.get(TabularComponentService);
    expect(service).toBeTruthy();
  });
});

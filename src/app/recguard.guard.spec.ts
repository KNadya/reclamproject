import { TestBed, async, inject } from '@angular/core/testing';

import { RecguardGuard } from './recguard.guard';

describe('RecguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecguardGuard]
    });
  });

  it('should ...', inject([RecguardGuard], (guard: RecguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

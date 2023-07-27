import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authSolicitanteGuard } from './auth-solicitante.guard';

describe('authSolicitanteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authSolicitanteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

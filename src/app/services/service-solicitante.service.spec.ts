import { TestBed } from '@angular/core/testing';

import { ServiceSolicitanteService } from './service-solicitante.service';

describe('ServiceSolicitanteService', () => {
  let service: ServiceSolicitanteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceSolicitanteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

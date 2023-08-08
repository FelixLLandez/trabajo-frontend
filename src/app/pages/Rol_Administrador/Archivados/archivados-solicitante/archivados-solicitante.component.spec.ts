import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadosSolicitanteComponent } from './archivados-solicitante.component';

describe('ArchivadosSolicitanteComponent', () => {
  let component: ArchivadosSolicitanteComponent;
  let fixture: ComponentFixture<ArchivadosSolicitanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivadosSolicitanteComponent]
    });
    fixture = TestBed.createComponent(ArchivadosSolicitanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

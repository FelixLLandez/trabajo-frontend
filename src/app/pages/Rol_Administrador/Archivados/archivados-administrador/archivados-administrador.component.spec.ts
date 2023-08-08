import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadosAdministradorComponent } from './archivados-administrador.component';

describe('ArchivadosAdministradorComponent', () => {
  let component: ArchivadosAdministradorComponent;
  let fixture: ComponentFixture<ArchivadosAdministradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivadosAdministradorComponent]
    });
    fixture = TestBed.createComponent(ArchivadosAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

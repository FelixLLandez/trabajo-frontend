import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadosPostulanteComponent } from './archivados-postulante.component';

describe('ArchivadosPostulanteComponent', () => {
  let component: ArchivadosPostulanteComponent;
  let fixture: ComponentFixture<ArchivadosPostulanteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivadosPostulanteComponent]
    });
    fixture = TestBed.createComponent(ArchivadosPostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

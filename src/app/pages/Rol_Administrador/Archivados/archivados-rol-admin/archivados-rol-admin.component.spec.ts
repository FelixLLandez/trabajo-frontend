import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivadosRolAdminComponent } from './archivados-rol-admin.component';

describe('ArchivadosRolAdminComponent', () => {
  let component: ArchivadosRolAdminComponent;
  let fixture: ComponentFixture<ArchivadosRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivadosRolAdminComponent]
    });
    fixture = TestBed.createComponent(ArchivadosRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

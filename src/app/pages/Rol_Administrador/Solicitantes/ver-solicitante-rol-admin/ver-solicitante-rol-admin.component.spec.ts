import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSolicitanteRolAdminComponent } from './ver-solicitante-rol-admin.component';

describe('VerSolicitanteRolAdminComponent', () => {
  let component: VerSolicitanteRolAdminComponent;
  let fixture: ComponentFixture<VerSolicitanteRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerSolicitanteRolAdminComponent]
    });
    fixture = TestBed.createComponent(VerSolicitanteRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

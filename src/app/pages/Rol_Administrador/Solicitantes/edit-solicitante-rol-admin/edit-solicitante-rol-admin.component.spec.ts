import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSolicitanteRolAdminComponent } from './edit-solicitante-rol-admin.component';

describe('EditSolicitanteRolAdminComponent', () => {
  let component: EditSolicitanteRolAdminComponent;
  let fixture: ComponentFixture<EditSolicitanteRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditSolicitanteRolAdminComponent]
    });
    fixture = TestBed.createComponent(EditSolicitanteRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

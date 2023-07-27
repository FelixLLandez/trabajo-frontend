import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSolicitanteRolAdminComponent } from './add-solicitante-rol-admin.component';

describe('AddSolicitanteRolAdminComponent', () => {
  let component: AddSolicitanteRolAdminComponent;
  let fixture: ComponentFixture<AddSolicitanteRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSolicitanteRolAdminComponent]
    });
    fixture = TestBed.createComponent(AddSolicitanteRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

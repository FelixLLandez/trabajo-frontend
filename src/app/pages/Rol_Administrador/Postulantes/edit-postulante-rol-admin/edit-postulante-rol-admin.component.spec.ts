import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostulanteRolAdminComponent } from './edit-postulante-rol-admin.component';

describe('EditPostulanteRolAdminComponent', () => {
  let component: EditPostulanteRolAdminComponent;
  let fixture: ComponentFixture<EditPostulanteRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPostulanteRolAdminComponent]
    });
    fixture = TestBed.createComponent(EditPostulanteRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

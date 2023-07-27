import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostulantesRolAdminComponent } from './add-postulantes-rol-admin.component';

describe('AddPostulantesRolAdminComponent', () => {
  let component: AddPostulantesRolAdminComponent;
  let fixture: ComponentFixture<AddPostulantesRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPostulantesRolAdminComponent]
    });
    fixture = TestBed.createComponent(AddPostulantesRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

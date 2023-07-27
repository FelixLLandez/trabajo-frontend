import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulantesRolAdminComponent } from './postulantes-rol-admin.component';

describe('PostulantesRolAdminComponent', () => {
  let component: PostulantesRolAdminComponent;
  let fixture: ComponentFixture<PostulantesRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostulantesRolAdminComponent]
    });
    fixture = TestBed.createComponent(PostulantesRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

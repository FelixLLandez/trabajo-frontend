import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilRolAdminComponent } from './perfil-rol-admin.component';

describe('PerfilRolAdminComponent', () => {
  let component: PerfilRolAdminComponent;
  let fixture: ComponentFixture<PerfilRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilRolAdminComponent]
    });
    fixture = TestBed.createComponent(PerfilRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

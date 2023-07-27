import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresRolAdminComponent } from './administradores-rol-admin.component';

describe('AdministradoresRolAdminComponent', () => {
  let component: AdministradoresRolAdminComponent;
  let fixture: ComponentFixture<AdministradoresRolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradoresRolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministradoresRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

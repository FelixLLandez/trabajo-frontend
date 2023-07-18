import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdminRolAdminComponent } from './edit-admin-rol-admin.component';

describe('EditAdminRolAdminComponent', () => {
  let component: EditAdminRolAdminComponent;
  let fixture: ComponentFixture<EditAdminRolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAdminRolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAdminRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

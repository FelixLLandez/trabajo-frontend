import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminRolAdminComponent } from './add-admin-rol-admin.component';

describe('AddAdminRolAdminComponent', () => {
  let component: AddAdminRolAdminComponent;
  let fixture: ComponentFixture<AddAdminRolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdminRolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAdminRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

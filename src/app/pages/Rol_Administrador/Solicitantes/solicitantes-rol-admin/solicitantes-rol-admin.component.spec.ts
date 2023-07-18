import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitantesRolAdminComponent } from './solicitantes-rol-admin.component';

describe('SolicitantesRolAdminComponent', () => {
  let component: SolicitantesRolAdminComponent;
  let fixture: ComponentFixture<SolicitantesRolAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitantesRolAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitantesRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

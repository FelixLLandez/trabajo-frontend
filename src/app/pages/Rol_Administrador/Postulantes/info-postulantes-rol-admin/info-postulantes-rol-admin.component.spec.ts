import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPostulantesRolAdminComponent } from './info-postulantes-rol-admin.component';

describe('InfoPostulantesRolAdminComponent', () => {
  let component: InfoPostulantesRolAdminComponent;
  let fixture: ComponentFixture<InfoPostulantesRolAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoPostulantesRolAdminComponent]
    });
    fixture = TestBed.createComponent(InfoPostulantesRolAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

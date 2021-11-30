import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarRoleComponent } from './registrar-role.component';

describe('RegistrarRoleComponent', () => {
  let component: RegistrarRoleComponent;
  let fixture: ComponentFixture<RegistrarRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

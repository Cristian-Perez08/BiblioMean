import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProveeComponent } from './registrar-provee.component';

describe('RegistrarProveeComponent', () => {
  let component: RegistrarProveeComponent;
  let fixture: ComponentFixture<RegistrarProveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarProveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

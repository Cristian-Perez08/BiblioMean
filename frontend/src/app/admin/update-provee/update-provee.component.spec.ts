import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProveeComponent } from './update-provee.component';

describe('UpdateProveeComponent', () => {
  let component: UpdateProveeComponent;
  let fixture: ComponentFixture<UpdateProveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProveeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

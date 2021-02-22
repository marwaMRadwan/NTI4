import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderexComponent } from './form-builderex.component';

describe('FormBuilderexComponent', () => {
  let component: FormBuilderexComponent;
  let fixture: ComponentFixture<FormBuilderexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBuilderexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuilderexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

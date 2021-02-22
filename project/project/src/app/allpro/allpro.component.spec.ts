import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproComponent } from './allpro.component';

describe('AllproComponent', () => {
  let component: AllproComponent;
  let fixture: ComponentFixture<AllproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

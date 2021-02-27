import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeimgComponent } from './changeimg.component';

describe('ChangeimgComponent', () => {
  let component: ChangeimgComponent;
  let fixture: ComponentFixture<ChangeimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetillesUserComponent } from './detilles-user.component';

describe('DetillesUserComponent', () => {
  let component: DetillesUserComponent;
  let fixture: ComponentFixture<DetillesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetillesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetillesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

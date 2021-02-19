import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePromosComponent } from './update-promos.component';

describe('UpdatePromosComponent', () => {
  let component: UpdatePromosComponent;
  let fixture: ComponentFixture<UpdatePromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

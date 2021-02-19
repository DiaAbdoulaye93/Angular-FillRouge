import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferentielsComponent } from './add-referentiels.component';

describe('AddReferentielsComponent', () => {
  let component: AddReferentielsComponent;
  let fixture: ComponentFixture<AddReferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

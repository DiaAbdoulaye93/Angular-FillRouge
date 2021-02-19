import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReferentielsComponent } from './update-referentiels.component';

describe('UpdateReferentielsComponent', () => {
  let component: UpdateReferentielsComponent;
  let fixture: ComponentFixture<UpdateReferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateReferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

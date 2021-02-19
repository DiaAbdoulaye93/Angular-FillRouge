import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcompetencevaluesComponent } from './defaultcompetencevalues.component';

describe('DefaultcompetencevaluesComponent', () => {
  let component: DefaultcompetencevaluesComponent;
  let fixture: ComponentFixture<DefaultcompetencevaluesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultcompetencevaluesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcompetencevaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillesProfileComponent } from './detailles-profile.component';

describe('DetaillesProfileComponent', () => {
  let component: DetaillesProfileComponent;
  let fixture: ComponentFixture<DetaillesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillesProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

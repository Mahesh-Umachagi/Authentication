import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidprojectsComponent } from './paidprojects.component';

describe('PaidprojectsComponent', () => {
  let component: PaidprojectsComponent;
  let fixture: ComponentFixture<PaidprojectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidprojectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

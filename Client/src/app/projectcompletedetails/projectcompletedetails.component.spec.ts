import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectcompletedetailsComponent } from './projectcompletedetails.component';

describe('ProjectcompletedetailsComponent', () => {
  let component: ProjectcompletedetailsComponent;
  let fixture: ComponentFixture<ProjectcompletedetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectcompletedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectcompletedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

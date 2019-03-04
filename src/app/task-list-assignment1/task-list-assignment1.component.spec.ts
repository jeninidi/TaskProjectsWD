import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListAssignment1Component } from './task-list-assignment1.component';

describe('TaskListAssignment1Component', () => {
  let component: TaskListAssignment1Component;
  let fixture: ComponentFixture<TaskListAssignment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskListAssignment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskListAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

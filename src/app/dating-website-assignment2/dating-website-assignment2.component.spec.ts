import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatingWebsiteAssignment2Component } from './dating-website-assignment2.component';

describe('DatingWebsiteAssignment2Component', () => {
  let component: DatingWebsiteAssignment2Component;
  let fixture: ComponentFixture<DatingWebsiteAssignment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatingWebsiteAssignment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatingWebsiteAssignment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

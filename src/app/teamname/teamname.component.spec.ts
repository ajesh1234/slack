import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnameComponent } from './teamname.component';

describe('TeamnameComponent', () => {
  let component: TeamnameComponent;
  let fixture: ComponentFixture<TeamnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

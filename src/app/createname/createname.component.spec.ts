import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenameComponent } from './createname.component';

describe('CreatenameComponent', () => {
  let component: CreatenameComponent;
  let fixture: ComponentFixture<CreatenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

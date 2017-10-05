import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateurlComponent } from './createurl.component';

describe('CreateurlComponent', () => {
  let component: CreateurlComponent;
  let fixture: ComponentFixture<CreateurlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateurlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateurlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

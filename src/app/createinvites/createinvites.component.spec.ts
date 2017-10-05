import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinvitesComponent } from './createinvites.component';

describe('CreateinvitesComponent', () => {
  let component: CreateinvitesComponent;
  let fixture: ComponentFixture<CreateinvitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateinvitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinvitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

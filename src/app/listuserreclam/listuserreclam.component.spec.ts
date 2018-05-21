import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserreclamComponent } from './listuserreclam.component';

describe('ListuserreclamComponent', () => {
  let component: ListuserreclamComponent;
  let fixture: ComponentFixture<ListuserreclamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserreclamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserreclamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

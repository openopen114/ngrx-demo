import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPlaygroundComponent } from './count-playground.component';

describe('CountPlaygroundComponent', () => {
  let component: CountPlaygroundComponent;
  let fixture: ComponentFixture<CountPlaygroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountPlaygroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

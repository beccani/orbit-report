import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentOfBobComponent } from './component-of-bob.component';

describe('ComponentOfBobComponent', () => {
  let component: ComponentOfBobComponent;
  let fixture: ComponentFixture<ComponentOfBobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentOfBobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentOfBobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

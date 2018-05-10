import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRobotFactoryComponent } from './add-new-robot-factory.component';

describe('AddNewRobotFactoryComponent', () => {
  let component: AddNewRobotFactoryComponent;
  let fixture: ComponentFixture<AddNewRobotFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewRobotFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRobotFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotFactoryDetailsComponent } from './robot-factory-details.component';

describe('RobotFactoryDetailsComponent', () => {
  let component: RobotFactoryDetailsComponent;
  let fixture: ComponentFixture<RobotFactoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotFactoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotFactoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

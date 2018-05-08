import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotFactoryShopComponent } from './robot-factory-shop.component';

describe('RobotFactoryShopComponent', () => {
  let component: RobotFactoryShopComponent;
  let fixture: ComponentFixture<RobotFactoryShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RobotFactoryShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RobotFactoryShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

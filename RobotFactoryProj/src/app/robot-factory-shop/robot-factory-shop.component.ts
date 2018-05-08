import { Component, OnInit } from '@angular/core';
import {RobotFactory} from '../RobotFactoryShop';
import {RobotFactoryService} from "../robot-factory.service";


@Component({
  selector: 'app-robot-factory-shop',
  templateUrl: './robot-factory-shop.component.html',
  styleUrls: ['./robot-factory-shop.component.css']
})
export class RobotFactoryShopComponent implements OnInit {

  robotFac:RobotFactory[];

  constructor(private robotFactoryService:RobotFactoryService) {}

  getRobots():void {
    this.robotFactoryService.getRobots().subscribe(robotFac => this.robotFac = robotFac);
  }

  ngOnInit() {
    this.getRobots();
  }

}

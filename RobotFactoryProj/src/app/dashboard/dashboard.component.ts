import { Component, OnInit } from '@angular/core';
import {RobotFactory} from '../RobotFactoryShop';
import {RobotFactoryService} from "../robot-factory.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  robotFac:RobotFactory[];

  constructor(private robotFactoryService:RobotFactoryService) {}

  getRobots():void {
    this.robotFactoryService.getRobots().subscribe(robotFac => this.robotFac = robotFac.slice(1,5));
  }

  ngOnInit() {
    this.getRobots();
  }

}

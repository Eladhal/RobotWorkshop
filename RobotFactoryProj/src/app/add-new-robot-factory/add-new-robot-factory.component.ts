import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-robot-factory',
  templateUrl: './add-new-robot-factory.component.html',
  styleUrls: ['./add-new-robot-factory.component.css']
})
export class AddNewRobotFactoryComponent implements OnInit {

  constructor() { }

  AddNewRobot(branchName:string,managerName:string,employees:string,city:string,Lat:string,Lon:string):void {

  }

  ngOnInit() {
  }

}

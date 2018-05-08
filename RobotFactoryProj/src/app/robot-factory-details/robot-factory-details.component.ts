import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {RobotFactoryService} from "../robot-factory.service";
import {RobotFactory} from "../RobotFactoryShop";

@Component({
  selector: 'app-robot-factory-details',
  templateUrl: './robot-factory-details.component.html',
  styleUrls: ['./robot-factory-details.component.css']
})
export class RobotFactoryDetailsComponent implements OnInit {

  // @Input()robotFact:RobotFactory;
  public robotFac :RobotFactory;

  constructor(
    private route: ActivatedRoute,
    private robotFacService: RobotFactoryService,
    private location: Location,
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotFacService.getRobot(id)
      .subscribe(hero => this.robotFac = hero);
  }

  goBack() :void{
    this.location.back();

  }

}

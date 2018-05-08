// import {RobotFactory} from './RobotFactoryShop';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const robots = [
      {id:1 , branchName:'brName1',managerName:'manager1',city:'Tel-Aviv',employees:5,coordinates:{lon:20.1,lat:23.2}},
      {id:2 , branchName:'brName2',managerName:'manager2',city:'Vienna',employees:8,coordinates:{lon:23.4,lat:33.2}},
      {id:3 , branchName:'brName3',managerName:'manager3',city:'Brussels',employees:12,coordinates:{lon:22.1,lat:26.2}},
      {id:4 , branchName:'brName4',managerName:'manager4',city:'Zagreb',employees:6,coordinates:{lon:28.1,lat:43.2}},
      {id:5 , branchName:'brName5',managerName:'manager5',city:'Prague',employees:20,coordinates:{lon:21.2,lat:24.6}},
      {id:6 , branchName:'brName6',managerName:'manager6',city:'Paris',employees:18,coordinates:{lon:28.1,lat:27.2}},
      {id:7 , branchName:'brName7',managerName:'manager7',city:'Berlin',employees:35,coordinates:{lon:30.1,lat:40.2}},
      {id:8 , branchName:'brName8',managerName:'manager8',city:'Athens',employees:50,coordinates:{lon:33.1,lat:41.2}},
      {id:9 , branchName:'brName9',managerName:'manager9',city:'Budapest',employees:17,coordinates:{lon:25.1,lat:29.2}},
      {id:10 , branchName:'brName10',managerName:'manager10',city:'Rome',employees:10,coordinates:{lon:18.1,lat:15.2}}
    ];
    return {robots};
  }
}



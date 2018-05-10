import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RobotFactoryShopComponent} from './robot-factory-shop/robot-factory-shop.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RobotFactoryDetailsComponent} from './robot-factory-details/robot-factory-details.component';
import {AddNewRobotFactoryComponent} from "./add-new-robot-factory/add-new-robot-factory.component";

const routes: Routes = [
  { path: 'robot-factory-shop', component: RobotFactoryShopComponent},
  { path: 'dashboard', component: DashboardComponent },
   { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'robot-factory-detail/:id', component: RobotFactoryDetailsComponent },
  { path: 'robot-factory-shop/add-new-robot-factory', component: AddNewRobotFactoryComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}


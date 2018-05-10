import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



import { AppComponent } from './app.component';
import { RobotFactoryShopComponent } from './robot-factory-shop/robot-factory-shop.component';
import { RobotFactoryDetailsComponent } from './robot-factory-details/robot-factory-details.component';
import {RobotFactoryService} from "./robot-factory.service";
import { MessagesComponent } from './messages/messages.component';
import {MessagesService} from "./messages.service";
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewRobotFactoryComponent } from './add-new-robot-factory/add-new-robot-factory.component';



@NgModule({
  declarations: [
    AppComponent,
    RobotFactoryShopComponent,
    RobotFactoryDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    AddNewRobotFactoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [RobotFactoryService,MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

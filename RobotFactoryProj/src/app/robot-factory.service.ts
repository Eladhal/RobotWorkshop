import { Injectable } from '@angular/core';
import {RobotFactory} from './RobotFactoryShop';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from  'rxjs';
import {of} from 'rxjs/observable/of';
import {MessagesService} from "./messages.service";
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class RobotFactoryService {
  private robotsUrl = 'api/robots';  // URL to web api

  constructor(private http: HttpClient,private messgesService:MessagesService) { }

  getRobots(): Observable<RobotFactory[]> {
    this.messgesService.add('RobotFactoryService: fetched Robotos');
    return this.http.get<RobotFactory[]>(this.robotsUrl).pipe(tap(robots => this.log(`fetched robots`)),
      catchError(this.handleError('getRobots', []))
    );
  }

  getRobot(id:number): Observable<RobotFactory> {
    this.messgesService.add(`RobotFactoryService: fetched hero id=${id}`);
    const url = `${this.robotsUrl}/${id}`;
    return this.http.get<RobotFactory>(url).pipe(
      tap(_ => this.log(`fetched robot id=${id}`)),
      catchError(this.handleError<RobotFactory>(`getRobot id=${id}`))
    );
  }

  /** Log a RobotFactoryService message with the MessageService */
  private log(message: string) {
    this.messgesService.add('RobotFactoryService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

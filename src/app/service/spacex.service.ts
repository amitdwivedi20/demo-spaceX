import { Injectable } from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private subjectActionFilter = new Subject<any>();

  constructor(private http: HttpClient) { }

  public baseuri = 'https://api.spacexdata.com/v3/launches';


  public getAll(params): Observable<any> {
    return this.http.get(this.baseuri + params);
  }


  public setMessageForFilter(message: any): void {
    this.subjectActionFilter.next({ value: message });
  }
  public getMessageForFilter(): Observable<any> {
    return this.subjectActionFilter.asObservable();
  }
}

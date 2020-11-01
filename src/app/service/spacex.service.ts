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


  getAll(params): Observable<any>{
    return this.http.get(this.baseuri + params);
  }


  setMessageForFilter(message: any) {
    this.subjectActionFilter.next({ value: message });
  }
  getMessageForFilter(): Observable<any> {
    return this.subjectActionFilter.asObservable();
  }
}

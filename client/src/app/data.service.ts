import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  result;

  constructor(private _http: HttpClient) { }

  getStudents() {
    return this._http.get('/students');
  }
}

import { Data } from './../intefaces/data';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PageDataService {
  constructor(private http: HttpClient) {}

  getPageData() {
    this.http
      .get<Data>('/assets/data/data.json')
      .pipe(map((resp: Data) => resp))
      .subscribe((data) => data);
  }
}

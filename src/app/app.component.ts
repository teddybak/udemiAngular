import { Data } from './intefaces/data';
import { PageDataService } from './services/page-data.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public datos: any;
  constructor(public servicec: PageDataService) {
    this.datos = servicec.getPageData();
  }
}

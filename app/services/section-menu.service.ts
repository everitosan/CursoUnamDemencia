import { Injectable } from '@angular/core';
import {MenuItem} from '../models/menu-item';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SectionMenuService{
  url: string;
  constructor(private http: Http) {
    this.url = "app/mocks/section-menu.json";
  }

  getMenu(){
    return this.http.get(this.url)
      .map(response => <MenuItem[]>response.json().data);
  }
}

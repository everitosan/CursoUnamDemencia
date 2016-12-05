import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoDataService{
  constructor(
      private http: Http,
  ){}

  getInfo(id: String) {
    return this.http.get("app/html/"+id+".html");
  }
}

import {Component, ElementRef} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {InfoDataService} from '../../services/info-data.service';
declare var jQuery: any;

@Component({
  selector: 'info-component',
  templateUrl: 'app/components/info/info-component.html',
  styleUrls: ['app/components/info/info-component.css']
})

export class InfoComponent {
  private mainInfo: String;
  private mainImage: String;
  private title: String;
  private type :String;

  constructor(
    private elRef : ElementRef,
    private route: ActivatedRoute,
    private infoDataService: InfoDataService
  ) {}

  ngOnInit(){
    this.initMainSection();
  }

  onMenuItem(){
    let _self = this;
    setTimeout(function() {
      _self.initMainSection()
    }, 100);
  }

  initMainSection () {
    //get the param
    this.route
      .params
      .subscribe(params => {
          this.type = params['id'];
      });
    //get the html based on the param
    this.infoDataService.getInfo(this.type)
    .subscribe((info: any) => {;
      this.mainInfo = info._body;
      let title = new String(info._body);
      this.title = title.substring(4, info._body.search("</h2>"));
    } );
  }
};

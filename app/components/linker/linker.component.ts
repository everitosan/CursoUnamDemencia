import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'linker',
  templateUrl: 'app/components/linker/linker.html',
  styleUrls:['app/components/linker/linker.css']
})

export class Linker {
  @Input('href') href: string;
  @Output() scrollEvent = new EventEmitter();


  scrollTo() {
    let target = <HTMLElement>document.querySelector(this.href);
    if (target !== null) {
      //debugger;
      let top =  target.offsetTop - 80;
      this.scrollEvent.emit();
      let parent = document.querySelector("#mainInfo");
      parent.scrollTop = top ;
    }
  }
};

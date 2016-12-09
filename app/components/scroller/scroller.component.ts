import {Component, ElementRef} from '@angular/core';
import {MenuScrollerComunicator} from '../../services/menu-scroller-connection.service';

@Component({
  selector: 'scroller',
  templateUrl: 'app/components/scroller/scroller.html',
  styleUrls: ['app/components/scroller/scroller.css']
})

export  class Scroller {

  base : HTMLElement;
  lastScrolled: number = 0;

  constructor(
    private element: ElementRef,
    private communicator: MenuScrollerComunicator
  ) {

  }

  ngOnInit() {
    this.base = this.element.nativeElement.querySelector("#base");
  }

  scroll(event: any) {
    let nScroll = this.base.getBoundingClientRect().top;
    if(nScroll < 640){
      this.communicator.showNext();
    } else {
      this.communicator.hideNext();
    }

  }
};

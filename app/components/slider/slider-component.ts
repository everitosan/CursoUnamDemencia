import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'slider-component',
  templateUrl: 'app/components/slider/slider-component.html',
  styleUrls: ['app/components/slider/slider-component.css']
})

export class SliderComponent {
  @Input('speed') speed: string;
  reel :any;
  constructor(
    private element: ElementRef
  ){

  }

  ngOnInit() {
    if(this.speed === undefined) {
      this.speed = "50";
    }
  }

  ngAfterViewInit() {
    this.initSlider();
    this.moveSlider();
  }

  initSlider() {
    this.reel = this.element.nativeElement.querySelector("#reel");

    this.cloneFirst();
    this.reel.style.width = (this.reel.children.length * window.innerWidth) +"px";
  }

  moveSlider() {
    let _self = this;
    let firstImage = this.element.nativeElement.querySelector("img");
    let difference = firstImage.getBoundingClientRect().left - (window.innerWidth*-2);

    if ( difference < 0 ) {
      this.reel.removeChild(firstImage);
      this.cloneFirst(difference);
    }
    this.triggerMovement();
    setTimeout(function() {
      requestAnimationFrame(_self.moveSlider.bind(_self));
    }, 500 );
  }

  triggerMovement() {
    let allImages = this.element.nativeElement.querySelectorAll("img");
    for(let i = 0; i < allImages.length; i++ ){
      let actual = this.getActualTranslate(allImages[i]);
      let newAdvance = parseInt(this.speed) + actual;

      allImages[i].style.transform = "translate3d(-"+newAdvance+"px,0,0)";
    }

  }

  removeFirst() {

  }

  cloneFirst(dif: any = 0){
    let container = this.reel;
    let firstImage = this.element.nativeElement.querySelector("img");
    let cloned = firstImage.cloneNode(false);

    cloned.style.left = (window.innerWidth *2 + dif - 1)  + "px";
    cloned.style.transform ="";
    container.appendChild(cloned);
  }

  getActualTranslate(img: any) {
    let transformAttr = img.style.transform;
    if (transformAttr == "") {
      return 0;
    }
    let transformX = transformAttr.substring( transformAttr.search("-")+1, transformAttr.search("px,"));
    return parseInt(transformX);
  }
};

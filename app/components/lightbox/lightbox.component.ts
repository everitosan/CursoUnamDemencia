import {Component, Input, ElementRef} from "@angular/core";

@Component({
  selector: "light-box",
  templateUrl: "app/components/lightbox/lightbox.html",
  styleUrls: ["app/components/lightbox/lightbox.css"]
})

export class LightBox{
  @Input('mode') mode: string;
  @Input('trigger') trigger: string;
  isShown: boolean =  false;
  index: number = 0;
  allImages :HTMLElement[] = [];

  constructor(
    private element: ElementRef){

  }

  ngOnInit(){
     this.allImages = this.element.nativeElement.querySelectorAll(".current img");
     for(let i = 0; i < this.allImages.length; i++) {
       this.allImages[i].style.display = "none";
     }
     this.allImages[this.index].style.display= "inline-block";
  }

  hasTextTrigger() {
     return this.mode === "text";
  }

  toggleBox() {
    this.isShown = !this.isShown;
  }

  hasOneChild() {
    return this.allImages.length === 1;
  }

  next() {
    if (this.index < this.allImages.length -1 ) {
      this.allImages[this.index].style.display = "none";
      this.index ++;
      this.allImages[this.index].style.display = "inline-block";
    }
  }

  prev() {
    if (this.index > 0 ) {
      this.allImages[this.index].style.display = "none";
      this.index --;
      this.allImages[this.index].style.display = "inline-block";
    }
  }

};

import {Component, Input, ElementRef} from '@angular/core';
@Component({
  selector: "sound",
  templateUrl: "app/components/audio/audio.html",
  styleUrls: ["app/components/audio/audio.css"]
})

export class SoundComponent {
  @Input('src') src: string;

  constructor(
    private element: ElementRef
  ) {

  }

  playSound() {
    this.element.nativeElement.querySelector("audio").play();
  }
};

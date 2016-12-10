import {Component, Input, ElementRef} from '@angular/core';
@Component({
  selector: "sound",
  templateUrl: "app/components/audio/audio.html",
  styleUrls: ["app/components/audio/audio.css"]
})

export class SoundComponent {
  isPlaying: boolean = false;
  @Input('src') src: string;

  constructor(
    private element: ElementRef
  ) {

  }

  playSound() {
    if(!this.isPlaying) {
      this.element.nativeElement.querySelector("audio").play();
      this.isPlaying = true;
    } else {
      this.element.nativeElement.querySelector("audio").pause();
      this.isPlaying = false;
    }
  }
};

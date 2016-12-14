import {Component, Input, ElementRef} from '@angular/core';
@Component({
  selector: "sound",
  templateUrl: "app/components/audio/audio.html",
  styleUrls: ["app/components/audio/audio.css"]
})

export class SoundComponent {
  isPlaying: boolean = false;
  @Input('src') src: string;
  @Input('color') color: string;

  constructor(
    private element: ElementRef
  ) {
    if (this.color === undefined) this.color = "gray";
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

  isIconColor(iColor: string) {
    return iColor === this.color;
  }
};

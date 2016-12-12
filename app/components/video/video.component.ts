import {Component, Input} from '@angular/core';

@Component({
  selector: "video-view",
  templateUrl: "app/components/video/video.html",
  styleUrls: ["app/components/video/video.css"]
})

export class VideoComponent{
  @Input('src') src: string;

  ngOnInit(){
    //console.log(this.src);
  }
};

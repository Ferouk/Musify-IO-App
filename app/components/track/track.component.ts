import {Component, OnInit, Input} from '@angular/core';
import {YoutubeService} from "../../services/youtube.service";
import {Youtube} from "../../../Youtube";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  moduleId: module.id,
  selector: 'youtube',
  templateUrl: 'track.component.html'
})

export class TrackComponent implements OnInit{
  @Input() q:string;
  @Input() spotifyId:string;
  private yt:Youtube;
  private dangerousVideoUrl: string;
  private videoUrl:any;

  constructor(private _youtubeService:YoutubeService, private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.q = this.q.replace(/ /g,"%20");
    this._youtubeService.getClip(this.q)
          .subscribe(res => this.updateVideoUrl(res))
     //this.updateVideoUrl(this.yt.id.videoId)
  }

  updateVideoUrl(data: any) {
    this.yt = data.items[0];
    this.dangerousVideoUrl = 'https://www.youtube.com/embed/' + data.items[0].id.videoId + "?version=3&enablejsapi=1";
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }

}

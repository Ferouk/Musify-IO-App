import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";

import "rxjs/add/operator/map"

@Injectable()
export class YoutubeService{
  private searchUrl: string;
  private key = "YOURKEYHERE";

  constructor(private _http: Http){

  }

  getClip(str:string, type='video'){
    this.searchUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q='+str+'&type='+type+'&videoDefinition=high&key='+this.key;
    return this._http.get(this.searchUrl)
      .map(res => res.json());
  }


}

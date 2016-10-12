import { Component } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";
import {Artist} from "../../../Artist";
@Component({
  moduleId: module.id,
  selector: 'search',
  templateUrl: 'search.component.html'
})
export class SearchComponent {
  SearchStr:string;
  searchRes:Artist[];
  constructor(private _spotifyService: SpotifyService){

  }

  SearchMusic(){
    if(this.SearchStr != ""){
      this._spotifyService.SearchMusic(this.SearchStr)
        .subscribe(res => {
          this.searchRes = res.artists.items;
        })
    }else{
      this.searchRes = null;
    }
  }
}

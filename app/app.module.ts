import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { routing, appRoutingProviders } from './app.routing';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';
import { SpotifyService } from "./services/spotify.service";
import { YoutubeService } from "./services/youtube.service";
import { TrackComponent } from "./components/track/track.component";

@NgModule({
  imports: [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, SearchComponent, ArtistComponent, AlbumComponent, TrackComponent],
  providers: [ appRoutingProviders, SpotifyService, YoutubeService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

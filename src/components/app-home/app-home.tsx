import { Component, h } from '@stencil/core';
import { Plugins, DeviceInfo } from '@capacitor/core';
import * as WebVPPlugin from 'capacitor-video-player';

const { CapacitorVideoPlayer } = Plugins;

const { Device } = Plugins;

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {
  private _info: DeviceInfo = null;
  private _url: string = null;
  private _mp4: string = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  private _videoPlayer: any;

  componentWillLoad() {
    this._initPlugin();


  }
  private async _initPlugin() {
    this._info = await Device.getInfo();
    if (this._info.platform === "ios" || this._info.platform === "android") {
      this._videoPlayer = CapacitorVideoPlayer;
    } else {
      this._videoPlayer = WebVPPlugin.CapacitorVideoPlayer;
    }
    this._url = this._mp4;
  }
  private async _handleClick() {
    console.log("in onClick")
    const res:any  = await this._videoPlayer.initPlayer({mode:"fullscreen",url:this._url,playerId:"fullscreen",componentTag:"app-home"});
    console.log("res.result " + res.result) ;     
    if(!res.result) console.log("res.message " + res.message);

  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        <p>
          Welcome to the PWA Toolkit. You can use this starter to build entire
          apps with web components using Stencil and ionic/core! Check out the
          README for everything that comes in this starter out of the box and
          check out our docs on <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <ion-button href="/profile/ionic" expand="block">Profile page</ion-button>
        <ion-button onClick={this._handleClick.bind(this)} color='primary' expand="block">Test Fullscreen MP4 Video</ion-button>
        <div id="fullscreen" slot="fixed">
        </div>

      </ion-content>
    ];
  }
}

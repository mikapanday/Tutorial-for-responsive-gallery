import { Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { AuthObserver } from 'ionic-appauth';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import "core-js/stable";
import "regenerator-runtime/runtime";
import { ActivationStart, Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

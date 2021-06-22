import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { LoginPageModule } from './pages/login/login.module';
import { OAuthModule } from 'angular-oauth2-oidc';


/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import Amplify, { Storage } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { LoginPage } from './pages/login/login.page'
import { OAuthService } from 'angular-oauth2-oidc';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


/* Configure Amplify resources */
Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, HttpClientModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

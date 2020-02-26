import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PhoneNumberComponent } from './components/sign-in/phone-number/phone-number.component';
import { PasswordComponent } from './components/sign-in/password/password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PhoneVerificationComponent } from './components/sign-up/phone-verification/phone-verification.component';
import { EmailComponent } from './components/sign-up/email/email.component';
import { PasswordSignupComponent } from './components/sign-up/password-signup/password-signup.component';
import { GeneralTopicsComponent } from './components/sidemenu/help/general-topics/general-topics.component';
import { ProfileComponent } from './components/sidemenu/settings/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberComponent,
    PasswordComponent,
    SignUpComponent,
    PhoneVerificationComponent,
    EmailComponent,
    PasswordSignupComponent,
    GeneralTopicsComponent,
    ProfileComponent
  ],
  entryComponents: [
    PhoneNumberComponent,
    PasswordComponent,
    SignUpComponent,
    PhoneVerificationComponent,
    EmailComponent,
    PasswordSignupComponent,
    GeneralTopicsComponent,
    ProfileComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

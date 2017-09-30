import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeArPage } from '../pages/home-ar/home-ar';

import { AboutPage } from '../pages/about/about';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsPage } from '../pages/terms/terms';
import { CategoriesPage } from '../pages/categories/categories';

import { AboutArPage } from '../pages/about-ar/about-ar';
import { PrivacyPolicyArPage } from '../pages/privacy-policy-ar/privacy-policy-ar';
import { TermsArPage } from '../pages/terms-ar/terms-ar';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    PrivacyPolicyPage,
    TermsPage,
    AboutArPage,
    PrivacyPolicyArPage,
    TermsArPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    PrivacyPolicyPage,
    TermsPage,
    AboutArPage,
    PrivacyPolicyArPage,
    TermsArPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule, 
    Network,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}
export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

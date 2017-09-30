import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { PrivacyPolicyPage } from '../pages/privacy-policy/privacy-policy';
import { TermsPage } from '../pages/terms/terms';

import { HomeArPage } from '../pages/home-ar/home-ar';
import { AboutArPage } from '../pages/about-ar/about-ar';
import { PrivacyPolicyArPage } from '../pages/privacy-policy-ar/privacy-policy-ar';
import { TermsArPage } from '../pages/terms-ar/terms-ar';

import { TranslateService } from '@ngx-translate/core';
import { HttpModule, Http } from '@angular/http';

//import { CategoriesPage } from '../pages/categories/categories';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  categories = [];
  categories_ar = [];

  url: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/categories';
  url_ar: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/categories/?lang=ar';

  pages: Array<{title: string, component: any}>;
  pages_ar: Array<{title: string, component: any}>;

  isLangToggle = false;

  constructor(private http: Http, translate: TranslateService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    translate.setDefaultLang('en');
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About Nasher', component: AboutPage },
      { title: 'Privacy Policy', component: PrivacyPolicyPage },
      { title: 'Terms & Conditions', component: TermsPage }
    ];

    this.pages_ar = [
      { title: 'الصفحة الرئيسية', component: HomeArPage },
      { title: 'عن ناشر', component: AboutArPage },
      { title: 'سياسة الخصوصية', component: PrivacyPolicyArPage },
      { title: 'شروط الأستخدام', component: TermsArPage }
    ]

    //english categories
    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.categories = data;
      console.log("all categories ", this.categories);
      console.log(typeof (this.categories));
    });

    //arabic categories
    this.http.get(this.url_ar).map(res => res.json()).subscribe(data => {
      this.categories_ar = data;
      console.log("all categories arabic ", this.categories_ar);
      console.log(typeof (this.categories_ar));
    });

  }

  changeLangAR(){
    this.isLangToggle = !this.isLangToggle
      this.nav.setRoot('HomeArPage');
      console.log("value of language ",this.isLangToggle);
  }

  changeLangEN(){
    this.isLangToggle = !this.isLangToggle
      this.nav.setRoot(HomePage);
      console.log("value of language ",this.isLangToggle);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  //navigate to english categories page
  navToCat(thisCat) {
    this.nav.push( 'CategoriesPage', { "cat": thisCat });
  }

  //navigate to arabic categories page
  navToCatAR(thisCat) {
    this.nav.push( 'CategoriesArPage', { "cat": thisCat });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

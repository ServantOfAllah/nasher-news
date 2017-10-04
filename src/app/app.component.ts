import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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

  url: string = 'http://nasher-news.com/wp-json/wp/v2/categories';
  url_ar: string = 'http://nasher-news.com/wp-json/wp/v2/categories/?lang=ar';

  pages: Array<{title: string, component: any}>;
  pages_ar: Array<{title: string, component: any}>;

  isLangToggle = false;

  constructor(private iab: InAppBrowser, private http: Http, translate: TranslateService, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    translate.setDefaultLang('en');
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'About Nasher', component: AboutPage },
      { title: 'Privacy Policy', component: PrivacyPolicyPage },
      { title: 'Terms & Conditions', component: TermsPage }
    ];

    this.pages_ar = [
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

  gotoHome(){
    this.nav.setRoot(HomePage);
  }
  gotoHomeAR(){
    this.nav.setRoot(HomeArPage);
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

  goToFacebook(){
    this.iab.create('https://www.facebook.com/Nasher_News-1168066179967546/?ref=bookmarks', '_blank');
  }
  goToTwitter(){
    this.iab.create('https://twitter.com/Nasher_News', '_blank');
  }
  goToInstagram(){
    this.iab.create('https://www.instagram.com/nasher_news/', '_blank');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController, Slides } from 'ionic-angular';
import { HttpModule, Http } from '@angular/http';
import { Network } from '@ionic-native/network';
import { Subscription } from 'rxjs/Subscription';
import { TranslateService } from '@ngx-translate/core';
import { HomePage } from '../home/home'
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-home-ar',
  templateUrl: 'home-ar.html',
})
export class HomeArPage {

  @ViewChild('imgSlides') imgSlide: Slides;

  categories = [];
  url: string = 'http://nasher-news.com/wp-json/wp/v2/categories'; // retrieve all categories
  all_postUrl: string = 'http://nasher-news.com/wp-json/wp/v2/posts'; // retrieve all posts
  cat_postUrl: string = "http://nasher-news.com/wp-json/wp/v2/posts?categories=" // retrieve specific posts under categories

  url_ar: string = 'http://nasher-news.com/wp-json/wp/v2/categories/?lang=ar';  // retrieve all categories arabic
  all_postUrl_ar: string = 'http://nasher-news.com/wp-json/wp/v2/posts/?lang=ar'; // retrieve all posts arabic
  cat_postUrl_ar: string = "http://nasher-news.com/wp-json/wp/v2/posts?categories=&lang=ar"  // retrieve specific posts under categories arabic

  cat_post_id: any;
  cat_post = [];
  all_post = [];
  
  connected: Subscription;
  disconnected: Subscription;
  connectionStateVal: any;

  public title: string = "";

  constructor(private translateService: TranslateService, private network: Network, private toast: ToastController, private platform: Platform, private http: Http, public navCtrl: NavController, private navParams: NavParams) {

    this.http.get(this.url_ar).map(res => res.json()).subscribe(data => {
      this.categories = data;
      console.log("specific post ", this.categories);
      console.log(typeof (this.categories));
    });

    this.http.get(this.all_postUrl_ar).map(res => res.json()).subscribe(data => {
      this.all_post = data;
      console.log("All post ", this.all_post);
    });

    //this.connectionStateVal = this.displayNetworkUpdate(this.connectionStateVal);
    
  }

  //retrieve all posts
  retrieveAllPosts(){

  }

  changetoEN(){
    this.navCtrl.setRoot(HomePage);
  }

  displayNetworkUpdate(connectionState: string): string {
    let networkType = this.network.type
    this.toast.create({
      message: `You are now ${connectionState} via ${networkType}`,
      duration: 3000
    }).present();

    return connectionState;
  }

  ionViewDidEnter() {
    this.connected = this.network.onConnect().subscribe(data => {
      console.log(data)
      this.connectionStateVal = this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    this.disconnected = this.network.onDisconnect().subscribe(data => {
      console.log(data)
      this.connectionStateVal = this.displayNetworkUpdate(data.type);
    }, error => console.error(error));

    if (this.connectionStateVal == 'offline') {
      setTimeout(() => {
        //this.connectionStateVal = !this.connectionStateVal
      }, 1000);
    } else {
      setTimeout(() => {
        //this.connectionStateVal = !this.connectionStateVal
      }, 1000);
    }

  }

  ionViewDidLoad() {
    setInterval(() =>{
      this.imgSlide.slideNext();
    }, 3000)
  }

  ionViewWillLeave() {
    this.connected.unsubscribe();
    this.disconnected.unsubscribe();
  }

  // reloadPage(){
  //   this.displayNetworkUpdate(this.connectionStateVal);
  //   this.navCtrl.setRoot(HomeArPage);
  // }

  navToCat(thisCat) {
    const pushing = this.navCtrl.push('CategoriesArPage', { "cat": thisCat });
    console.log("idparams", pushing)
  }

  navToPost(imageSlide){
    const full_desc_slide = this.navCtrl.push('FullPostPage', {"posts": imageSlide});
    console.log("all post from cat page: ", full_desc_slide);
  }


  //refresher method
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.displayNetworkUpdate(this.connectionStateVal);
      this.navCtrl.setRoot(HomeArPage);
      refresher.complete();
    }, 2000);
  }

}

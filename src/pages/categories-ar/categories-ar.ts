import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular';
import {HttpModule } from '@angular/http';
import {Http } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-categories-ar',
  templateUrl: 'categories-ar.html',
})
export class CategoriesArPage {
  
  cat_postUrl: string = "http://nasher-news.com/wp-json/wp/v2/posts?categories="; 

  cat_postUrl_ar: string = "http://nasher-news.com/wp-json/wp/v2/posts?categories=" //arabic

  params = [];
  cat_post = [];
  cat_post_id = [];
  ids: any;
  catName: any;
  isPostEmpty: boolean;

  @ViewChild('imgSlides') imgSlide: Slides;


  constructor(private iab: InAppBrowser, private modalCtrl: ModalController, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.ids = this.navParams.get('cat').id;
    this.catName = this.navParams.get('cat').name;
    console.log('clicked id:', this.ids);
    console.log('clicked cat name:', this.catName);
    this.getCatPost();
  }

  getCatPost(){
    this.http.get(this.cat_postUrl_ar+this.ids+'&lang=ar').map(res => res.json()).subscribe(data => {
      this.cat_post = data;
      if(this.cat_post.length < 1){
        this.isPostEmpty = true;
      }else{
        this.isPostEmpty = false;
      }
      console.log("specific cat", this.cat_post);
      console.log(typeof(this.cat_post));
    },err => {
      console.log("Oops!");
    });
  }
  openModal(allPost){
    const full_desc = this.navCtrl.push('FullPostPage', {"posts": allPost});
    //full_desc.present();
    console.log("all post from cat page: ", full_desc);
  }

  ionViewDidLoad() {
    setInterval(() =>{
      this.imgSlide.slideNext();
    }, 3000)
  }

  postSlider(imageSlide){
    const full_desc_slide = this.navCtrl.push('FullPostPage', {"posts": imageSlide});
    console.log("all post from cat page: ", full_desc_slide);
  }

  goToFacebook(){
    this.iab.create('https://www.facebook.com/Nasher_News-1168066179967546/?ref=bookmarks', '_System');
  }
  goToTwitter(){
    this.iab.create('https://twitter.com/Nasher_News', '_System');
  }
  goToInstagram(){
    this.iab.create('https://www.instagram.com/nasher_news/', '_System');
  }


}
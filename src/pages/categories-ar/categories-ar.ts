import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides } from 'ionic-angular';
import {HttpModule } from '@angular/http';
import {Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-categories-ar',
  templateUrl: 'categories-ar.html',
})
export class CategoriesArPage {
  
  cat_postUrl: string = "http://nashernews.staging.wpengine.com/wp-json/wp/v2/posts?categories="; 

  cat_postUrl_ar: string = "http://nashernews.staging.wpengine.com/wp-json/wp/v2/posts?categories=" //arabic

  params = [];
  cat_post = [];
  cat_post_id = [];
  ids: any;
  catName: any;

  @ViewChild('imgSlides') imgSlide: Slides;


  constructor(private modalCtrl: ModalController, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.ids = this.navParams.get('cat').id;
    this.catName = this.navParams.get('cat').name;
    console.log('clicked id:', this.ids);
    console.log('clicked cat name:', this.catName);
    this.getCatPost();
  }

  getCatPost(){
    this.http.get(this.cat_postUrl_ar+this.ids+'&lang=ar').map(res => res.json()).subscribe(data => {
      this.cat_post = data;
      console.log(this.cat_post);
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

}
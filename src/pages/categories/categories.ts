import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {HttpModule } from '@angular/http';
import {Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  params = [];
  cat_postUrl: string = "http://nashernews.staging.wpengine.com/wp-json/wp/v2/posts?categories=";
  cat_post = [];
  cat_post_id = [];
  ids: any;


  constructor(private modalCtrl: ModalController, private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.ids = this.navParams.get('cat').id;
    console.log('clicked id:', this.ids);
    this.getCatPost();
  }

  getCatPost(){
    this.http.get(this.cat_postUrl+this.ids).map(res => res.json()).subscribe(data => {
      this.cat_post = data;
      console.log(this.cat_post);
      console.log(typeof(this.cat_post));
    },err => {
      console.log("Oops!");
    });
  }
  openModal(allPost){
    const full_desc = this.modalCtrl.create('FullPostPage', {"posts": allPost});
    full_desc.present();
    console.log("all post from cat page: ", full_desc);
  }

  ionViewDidLoad() {
  }

}

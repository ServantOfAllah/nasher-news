import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HttpModule } from '@angular/http';
import {Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories = [];
  url: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/categories';
  cat_postUrl: string = "http://nashernews.staging.wpengine.com/wp-json/wp/v2/posts?categories="
  cat_post_id: any;
  cat_post = [];

  constructor(private http: Http, public navCtrl: NavController, private navParams: NavParams) {

    this.http.get(this.url).map(res => res.json()).subscribe(data => {
      this.categories = data;
      console.log("specific post ",this.categories);
      console.log(typeof(this.categories));
    });

  }

  // getCatPost(){
  //   this.http.get(this.cat_postUrl+3).map(res => res.json()).subscribe(data => {
  //     this.cat_post = data;
  //     console.log(this.cat_post);
  //     console.log(typeof(this.cat_post));
  //     this.navCtrl.push('CategoriesPage', {"idparams": this.cat_post});
  //   });
  // }

  navToCat(thisCat){
    const pushing = this.navCtrl.push('CategoriesPage', {"cat": thisCat});
    console.log("idparams", pushing)
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {HttpModule } from '@angular/http';
import {Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-full-post',
  templateUrl: 'full-post.html',
})
export class FullPostPage {

  posts = [];
  getAuthor: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/users/';
  authorData = [];

  constructor(private http: Http, private view: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.posts = [this.navParams.get('posts')];
    console.log("full post page ",this.posts)
  }

  ionViewDidLoad() {
    const author = this.navParams.get('posts').author

    this.http.get(this.getAuthor+author).map(res => res.json()).subscribe(data => {
      this.authorData = [data];
      console.log(this.authorData);
      console.log(typeof(this.authorData));
    },err => {
      console.log("Oops!");
    });
  }

  closeModal(){
    this.view.dismiss();
  }

}

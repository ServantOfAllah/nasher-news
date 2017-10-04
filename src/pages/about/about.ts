import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  aboutData = [];
  aboutUrl: string = 'http://nasher-news.com/wp-json/wp/v2/pages/185';

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.http.get(this.aboutUrl).map(res => res.json()).subscribe(data =>{
      this.aboutData = [data];
      console.log("about-page data", this.aboutData);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}

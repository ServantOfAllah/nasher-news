import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-terms-ar',
  templateUrl: 'terms-ar.html',
})
export class TermsArPage {

  termsData = [];
  termsUrl: string = 'http://nasher-news.com/wp-json/wp/v2/pages/193?lang=ar';

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.http.get(this.termsUrl).map(res => res.json()).subscribe(data =>{
      this.termsData = [data];
      console.log("about-page arabic data", this.termsData);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsArPage');
  }

}

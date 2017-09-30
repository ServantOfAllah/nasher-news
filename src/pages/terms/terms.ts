import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-terms',
  templateUrl: 'terms.html',
})
export class TermsPage {

  termsData = [];
  termsUrl: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/pages/189';

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.http.get(this.termsUrl).map(res => res.json()).subscribe(data =>{
      this.termsData = [data];
      console.log("about-page data", this.termsData);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsPage');
  }

}

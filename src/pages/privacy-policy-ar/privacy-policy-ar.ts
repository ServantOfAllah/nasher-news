import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-privacy-policy-ar',
  templateUrl: 'privacy-policy-ar.html',
})
export class PrivacyPolicyArPage {

  privacyData = [];
  privacyUrl: string = 'http://nashernews.staging.wpengine.com/wp-json/wp/v2/pages/187';

  constructor(private http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.http.get(this.privacyUrl).map(res => res.json()).subscribe(data =>{
      this.privacyData = [data];
      console.log("about-page data", this.privacyData);
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPolicyArPage');
  }

}

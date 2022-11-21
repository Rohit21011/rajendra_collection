import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BuyerDetailsPage } from '../buyer-details/buyer-details.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  buyerDetails(){
    this.navCtrl.navigateForward('buyer-details');
 }

 sellerDetails(){
this.navCtrl.navigateForward('seller-details');
 }

 search(){
this.navCtrl.navigateForward('search');
 }

 stocks(){
this.navCtrl.navigateForward('stock');
 }

 sellReport(){
this.navCtrl.navigateForward('sales-report');
 }

 changePassword(){
  this.navCtrl.navigateForward('change-password');
 }

 changeSaleRportPassword(){
  this.navCtrl.navigateForward('change-sales-password');
 }
}

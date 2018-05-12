import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PainelPage } from '../painel/painel';
import { ContasPage } from '../contas/contas';
import { SairPage } from '../sair/sair';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage = PainelPage;
  constructor(public navCtrl: NavController) {
 
  }
  OpenConta(){
    this.navCtrl.push(ContasPage);
  }
  /*OpenContact(){
    this.navCtrl.push(ContactPage);
  }*/
  OpenSair(){
    this.navCtrl.push(SairPage);
  }}

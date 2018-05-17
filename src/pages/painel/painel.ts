import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
@IonicPage()
@Component({
  selector: 'page-painel',
  templateUrl: 'painel.html',
})
export class PainelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  openPerfil(){
    this.navCtrl.push(PerfilPage);
  }}

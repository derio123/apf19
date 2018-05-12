import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PesquisaPage } from '../pesquisa/pesquisa';
import { SairPage } from '../sair/sair';
import { ContasPage } from '../contas/contas';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  rootPage = PerfilPage;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  abrirContas(){
    this.navCtrl.push(ContasPage)
  }
  abrirPesquisa(){
    this.navCtrl.push(PesquisaPage)
  }
  abrirSair(){
    this.navCtrl.push(SairPage)
  }}

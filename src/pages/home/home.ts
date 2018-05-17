import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
import { PainelPage } from '../painel/painel';
import { ContasPage } from '../contas/contas';
import { SairPage } from '../sair/sair';
import { PerfilPage } from '../perfil/perfil';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  app: any;
  rootPage = PainelPage;
  constructor(private afAuth: AngularFireAuth,
    private toast: ToastController,
    public navCtrl: NavController,
  public navParams: NavParams) {}

  //Mostra ao usuario que está inscrito
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
    this.toast.create({
      message: 'Bem Vindo ao APFinanças, ${data.email}',
      duration: 3000
    }).present();
    }else{
      this.toast.create({
        message: 'Não foi encontrado detalhes de sua autenticação!!!',
        duration: 3000
      }).present();
    }
  });}
    
  OpenConta(){
    this.navCtrl.push(ContasPage);
  }
  OpenPerfil(){
    this.navCtrl.push(PerfilPage);
  }
  OpenSair(){
    this.navCtrl.push(SairPage);
}}

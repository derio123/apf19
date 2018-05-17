import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

//paginas importadas
import { usuario } from '../../models/usuario';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario = {} as usuario;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  /*ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }*/
  async login(usuario: usuario){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.senha)
    if (result) {
      this.navCtrl.setRoot(TabsPage);
  }}
  catch(e){
      console.error(e);
  }}
  cadastro(){
    this.navCtrl.push(SignupPage);
  }
}
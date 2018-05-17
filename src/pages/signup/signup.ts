import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuario } from '../../models/usuario';

//pagina importada
import { AngularFireAuth} from "angularfire2/auth";
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  usuario = {} as usuario;

  constructor(
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
     public navParams: NavParams) {
  }

  //ionViewDidLoad() {
  //console.log('ionViewDidLoad SignupPage');
  //}
  
  async cadastro(usuario: usuario){
    try{
   const result = await this.afAuth.auth.createUserWithEmailAndPassword( usuario.email, usuario.senha);
   if (result) {
    this.navCtrl.push(LoginPage);
}}
catch(e){
    console.error(e);
}}}

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Paginas importadas
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
//import { PesquisaPageModule } from '../pages/pesquisa/pesquisa.module';

import { AlertasPage } from '../pages/alertas/alertas';
import { ContasPage } from '../pages/contas/contas';
import { PainelPage } from '../pages/painel/painel';

//Paginas importadas conexões com BD
import { AngularFireModule} from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    PainelPage,
    AlertasPage,           
    ContasPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    //Modulo do AngularFire, para conectar ao firebase
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,

     //Importando o módulo das paginas
     PerfilPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    PainelPage,
    AlertasPage,
    ContasPage,
    WelcomePage,
    SignupPage,
    LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

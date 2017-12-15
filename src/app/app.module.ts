import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { CervejasProvider } from '../providers/cervejas/cervejas';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './firebase-config';
import { ListarCervejasPage } from '../pages/listar-cervejas/listar-cervejas';
import { ExibirMensagemProvider } from '../providers/exibir-mensagem/exibir-mensagem';

@NgModule({
  declarations: [
    MyApp,
    ListarCervejasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ListarCervejasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CervejasProvider,
    ExibirMensagemProvider,
    ExibirMensagemProvider
  ]
})
export class AppModule {}

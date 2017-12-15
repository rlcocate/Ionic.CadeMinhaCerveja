import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

/*
  Generated class for the ExibirMensagemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExibirMensagemProvider {

  constructor(public toastCtrl: ToastController) { }

  public exibirMensagem(message: string, duration: number = 3000, position: string = 'top') {
    this.toastCtrl.create({
          message: message,
          duration: duration = 3000,
          position: position}).present;
  }

}

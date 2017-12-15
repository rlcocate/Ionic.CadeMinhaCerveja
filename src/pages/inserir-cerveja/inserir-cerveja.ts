import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CervejasProvider } from '../../providers/cervejas/cervejas';

import { Cerveja } from '../../models/cerveja';
import { AngularFireDatabase } from 'angularfire2/database';
import { ExibirMensagemProvider } from '../../providers/exibir-mensagem/exibir-mensagem';

@IonicPage()
@Component({
  selector: 'page-inserir-cerveja',
  templateUrl: 'inserir-cerveja.html',
})
export class InserirCervejaPage {

  cerveja: Cerveja = new Cerveja();
  // tipo: string = 'i';

  constructor
    (
    public navCtrl: NavController,
    public navParams: NavParams,
    public db: AngularFireDatabase,
    public cervejaProvider: CervejasProvider,
    public toastCtrl: ExibirMensagemProvider
    ) { }

  ionViewDidLoad() {
    var registro = this.navParams.get('cerveja');
    if (registro != undefined) {
      this.cerveja = registro;
    }
  }

  private salvar(cerveja: Cerveja) {
    if (cerveja.key == undefined) {
      this.inserir(cerveja);
    } else {
      this.alterar(cerveja);
    }
  }

  private inserir(cerveja: Cerveja) {
    try {
      this.cervejaProvider.inserir(cerveja)
        .then(retorno => {
          this.toastCtrl.exibirMensagem('Dados gravados!');
          this.navCtrl.pop();
        });
    } catch (error) {
      this.toastCtrl.exibirMensagem("Erro ao inserir cerveja: " + error.message);
    }
  }

  private alterar(cerveja: Cerveja) {
    try {
      this.cervejaProvider.alterar(cerveja)
        .then(retorno => {
          this.toastCtrl.exibirMensagem('Dados alterados.');
          this.navCtrl.pop();
        });
    } catch (error) {
      this.toastCtrl.exibirMensagem("Erro ao alterar cerveja: " + error.message);
    }
  }
}
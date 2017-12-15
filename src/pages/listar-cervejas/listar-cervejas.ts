import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Cerveja } from '../../models/cerveja';
import { CervejasProvider } from '../../providers/cervejas/cervejas';
import { ExibirMensagemProvider } from '../../providers/exibir-mensagem/exibir-mensagem';

@IonicPage()
@Component({
  selector: 'page-listar-cervejas',
  templateUrl: 'listar-cervejas.html',
})
export class ListarCervejasPage {

  listaCervejas: Observable<Cerveja[]>;
  cerveja: Cerveja;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public cervejasProvider: CervejasProvider,
    public toastCtrl: ExibirMensagemProvider) {
  }

  ionViewDidLoad() {
    this.listar();
  }

  private listar() {
    try {
      this.listaCervejas = this.cervejasProvider
        .listar()
        .snapshotChanges()
        .map(changes => {
          return changes.map(c => ({
            key: c.payload.key, ...c.payload.val()
          }))
        });
    } catch (error) {
      this.toastCtrl.exibirMensagem("Erro ao listar cervejas: " + error);
    }
  }

  private excluir(cerveja) {
    try {
      this.cervejasProvider.excluir(cerveja)
        .then(r => {
          console.log('excluiu!');
        }
        ).catch(c => {
          console.log('erro');
        });
    } catch (error) {
      console.log(error);
      this.toastCtrl.exibirMensagem("Erro ao excluir cerveja: " + error.message);
    }
  }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Cerveja } from '../../models/cerveja'

@Injectable()
export class CervejasProvider {

  private listaCervejas = this.database.list<Cerveja>('cerveja-list', );

  constructor(private database: AngularFireDatabase) { }

  listar() {
    return this.listaCervejas;
  }

  inserir(cerveja: Cerveja) {
    return this.listaCervejas.push(cerveja);
  }

  alterar(cerveja: Cerveja) {
    return this.listaCervejas.update(cerveja.key, cerveja);
  }

  excluir(cerveja: Cerveja) {
    return this.listaCervejas.remove(cerveja.key);
  }
}
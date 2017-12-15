import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { ListarCervejasPage } from '../pages/listar-cervejas/listar-cervejas';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(public platform: Platform) {
    platform.ready().then(() => {
      this.platform = platform;
      this.rootPage = ListarCervejasPage
    })
  }
}


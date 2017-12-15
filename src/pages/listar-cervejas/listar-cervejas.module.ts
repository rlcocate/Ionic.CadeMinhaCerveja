import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarCervejasPage } from './listar-cervejas';

@NgModule({
  declarations: [
    ListarCervejasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarCervejasPage),
  ],
})
export class ListarCervejasPageModule {}

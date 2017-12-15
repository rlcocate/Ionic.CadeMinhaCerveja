import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InserirCervejaPage } from './inserir-cerveja';

@NgModule({
  declarations: [
    InserirCervejaPage,
  ],
  imports: [
    IonicPageModule.forChild(InserirCervejaPage),
  ],
})
export class InserirCervejaPageModule {}

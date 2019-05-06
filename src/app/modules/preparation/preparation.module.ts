import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandeComponent } from './commande/commande.component';
import { PreparationRoutingModule } from './preparation-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../template/layout/layout.module';
import { AddcommandeComponent } from './addcommande/addcommande.component';


@NgModule({
  declarations: [
    CommandeComponent,
    AddcommandeComponent,
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    PreparationRoutingModule,
    RouterModule
  ]
})
export class PreparationModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeComponent } from './commande/commande.component';
import { LayoutComponent } from './../template/layout/layout.component';
import { AddcommandeComponent } from './addcommande/addcommande.component';


const routes: Routes = [
    {path : '' , component : LayoutComponent,
  children: [
    { path: '', redirectTo : 'commande', pathMatch: 'full'},
    { path: 'commande', component: CommandeComponent},
    { path: 'add', component : AddcommandeComponent },
    { path: 'edit', component : AddcommandeComponent }, 
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
exports: [RouterModule]
})
export class PreparationRoutingModule {}

import { Injectable } from '@angular/core';
import { ICommande } from './../modeles/commande';

@Injectable()
export class CommandeService {
  commandes : ICommande []=
  [
    { numCommande : '1' ,refCommande : '123456',statut : '010', dateCreation : '12/10/2018'},
    { numCommande : '2' ,refCommande : '456456',statut : '010', dateCreation : '12/10/2018'},
    { numCommande : '3' ,refCommande : '123123',statut : '010', dateCreation : '12/10/2018'},

    { numCommande : '1' ,refCommande : '123456',statut : '030', dateCreation : '12/10/2018'},
    { numCommande : '2' ,refCommande : '456456',statut : '030', dateCreation : '12/10/2018'},
    { numCommande : '3' ,refCommande : '123123',statut : '030', dateCreation : '12/10/2018'},
  ];
  constructor() { }

  getAll() : ICommande[] {
    return this.commandes;
  }

  getCommandeSaisie() : ICommande[]{
    return this.commandes.filter(cmd => cmd.statut==='010');
  }

  getCommandePreparation() : ICommande[]{
    return this.commandes.filter(cmd => cmd.statut==='030');
  }

}

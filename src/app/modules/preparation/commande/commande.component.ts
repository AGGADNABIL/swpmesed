import { Component, OnInit } from '@angular/core';
import { CommandeService } from './../../../services/commande.service';
import { FormGroup } from '@angular/forms';
import { ICommande } from './../../../modeles/commande';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  
  formGrpCmd : FormGroup ;
  listeCommandes : ICommande[];

  constructor(private cmdService :CommandeService) { }

  ngOnInit() {
    this.listeCommandes=this.cmdService.getCommandeSaisie();
    console.log("saisie : ")
    console.log(this.listeCommandes);
    
  }

  listCmdEnSaisie(){
    this.listeCommandes=this.cmdService.getCommandeSaisie();
    console.log("saisie : ")
    console.log(this.listeCommandes);
  }

  listCmdEnPreparation(){
    this.listeCommandes=this.cmdService.getCommandePreparation();
  }
  getAll(){
    this.listeCommandes=this.cmdService.getAll();
    
  }
}

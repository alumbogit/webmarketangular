import { AfterContentInit, Component, inject, input, signal } from '@angular/core';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Router } from '@angular/router';
import { Produit } from '../../model/Produit';

@Component({
  selector: 'app-hearder',
  standalone: true,
  imports: [SearchBarComponent
  ],
  templateUrl: './hearder.component.html',
  styleUrl: './hearder.component.scss'
})
export class HearderComponent implements AfterContentInit {
  route =inject(Router)
  search = input.required<boolean>()
  connexionState = signal<boolean>(false)
  panier = input<number>()
  listeProduits = input<Produit[]>();

  savepanier(emit:Event){
    emit.preventDefault();
    localStorage.setItem('panier',JSON.stringify(this.listeProduits())); // Transformation en JSON
    localStorage.removeItem("login")
   this.route.navigate(["panier"])
  }

  connect(emit:Event){
    emit.preventDefault();
   this.route.navigate(["connexion"])
  }

  verifierconnexion(){
    const token =localStorage.getItem("login")
    if (token) {
      this.connexionState.set(true)
      console.log("voici le token "+token)
    }
  }
  
  ngAfterContentInit(): void {
      this.verifierconnexion()
      
  }
}

import { Component, EventEmitter, Output, } from '@angular/core';
import { ProduitcardComponent } from '../cards/produitcard/produitcard.component';
import { Produit } from '../../model/Produit';

@Component({
  selector: 'app-produitarea',
  standalone: true,
  imports: [
    ProduitcardComponent
  ],
  templateUrl: './produitarea.component.html',
  styleUrl: './produitarea.component.scss'
})
export class ProduitareaComponent {
  @Output() clickData =new EventEmitter<Produit>();

  relayerDonnees(produit: Produit) {
    this.clickData.emit(produit);}

  mesProd:Produit[]=[
    // nom:string,image:string,prix:number,categorie:string
    {
      id:0,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-1.png"
    },
    {
      id:1,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-2.png"
    },
    {
      id:2,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-3.png"
    },
    {
      id:3,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-8.png"
    },
    {
      id:4,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-8.png"
    },
    {
      id:5,
      categorie:"produits menages",
      prix:1200,
      nom:"tomate",
      image:"./assets/produits/product-thumb-8.png"
    },
  ];
}

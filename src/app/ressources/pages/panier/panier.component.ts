import { Component, OnDestroy, OnInit } from '@angular/core';
import { HearderComponent } from '../hearder/hearder.component';
import { Produit } from '../../model/Produit';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    HearderComponent
  ],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})
export class PanierComponent implements OnInit,OnDestroy{
  searchbar:boolean=false;
  items: Produit[] = []; 
  variableLocale: string = ''; 
  prixpaye:number=0;

  ngOnInit(): void {
    const panierData = localStorage.getItem("panier");
    this.variableLocale = panierData ? panierData : '';
    this.items = panierData ? JSON.parse(panierData) : [];
    this.items.forEach(element => {
      this.prixpaye=this.prixpaye+element.prix
    });
  }
  ngOnDestroy(): void {
      localStorage.clear();
  }

}

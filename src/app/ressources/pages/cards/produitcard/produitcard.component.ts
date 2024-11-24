import { Component, EventEmitter, input, Output } from '@angular/core';
import { Produit } from '../../../model/Produit';

@Component({
  selector: 'app-produitcard',
  standalone: true,
  imports: [],
  templateUrl: './produitcard.component.html',
  styleUrl: './produitcard.component.scss'
})
export class ProduitcardComponent {
  @Output() clickEnvoyees = new EventEmitter<Produit>();
  datacard=input.required<Produit>()
  envoyerDonnees() {
    this.clickEnvoyees.emit(this.datacard());
  }
}

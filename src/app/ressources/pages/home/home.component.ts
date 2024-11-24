import { Component, signal } from '@angular/core';
import { HearderComponent } from '../hearder/hearder.component';
import { SlideComponent } from '../slide/slide.component';
import { BannerComponent } from '../banner/banner.component';
import { ProduitareaComponent } from '../produitarea/produitarea.component';
import { FooterComponent } from '../footer/footer.component';
import { Produit } from '../../model/Produit';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HearderComponent,
    SlideComponent,
    BannerComponent,
    ProduitareaComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  searchbar: boolean = true
  addprod = signal<number>(0)
  listAchat=signal<Produit[]>([])
  // signal recu pour incrementer un produit
  handleData(produit: Produit) {
    this.listAchat.update(currentList => [...currentList, produit]);
    this.addprod.update(value => value + 1)
  }
}

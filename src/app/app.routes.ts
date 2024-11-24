import { Routes } from '@angular/router';
import { HomeComponent } from './ressources/pages/home/home.component';
import { LoginComponent } from './ressources/pages/login/login.component';
import { CreateComponent } from './ressources/pages/create/create.component';
import { NotFoundComponent } from './ressources/pages/not-found/not-found.component';
import { PanierComponent } from './ressources/pages/panier/panier.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path: 'connexion',component:LoginComponent},
    {path:'inscription',component:CreateComponent},
    {path : 'panier' , component :PanierComponent},
    {path:"**",component:NotFoundComponent}
];

import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfilComponent } from './user-profil/user-profil.component';

const ROUTES: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'user', component: UserProfilComponent},
  { path: '**', component: UserProfilComponent}, //route par defaut
];

export { ROUTES };
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ROUTES } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserProfilComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

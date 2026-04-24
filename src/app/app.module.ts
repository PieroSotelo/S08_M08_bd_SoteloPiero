import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GamesComponent } from './components/games/games.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

;
import { FooterComponent } from './footer/footer.component'//Modules
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StickyAreaComponent } from './sticky-area/sticky-area.component';
import { StickyComponent } from './sticky/sticky.component';
//Services
import { StickyService } from './services/sticky.service';
import { [footer]Component } from './[footer]/[footer].component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    StickyAreaComponent,
    StickyComponent,
    [footer]Component, FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ StickyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

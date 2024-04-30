import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { TrabajadoresModule } from './trabajadores/trabajadores.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RouterModule.forRoot([]),
    TrabajadoresModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

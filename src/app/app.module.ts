import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AvraAnimalsComponent } from './avra-animals/avra-animals.component';

@NgModule({
  declarations: [
    AppComponent,
    AvraAnimalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

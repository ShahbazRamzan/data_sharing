import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddComponent } from './Add/Add.component';
import { CredentialComponent } from './Add/credential/credential.component';
import { ConfigComponent } from './Add/config/config.component';
@NgModule({
  declarations: [
    AppComponent,
      AddComponent,
      ConfigComponent,
      CredentialComponent
       ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        FormsModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ComponentsModule} from "../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import {RouterModule} from "@angular/router";
import { NewsComponent } from './news/news.component';
import { NewsDetailsComponent } from './news/news-details/news-details.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    ContactComponent,
    NewsComponent,
    NewsDetailsComponent,
  ],
  imports: [
    CommonModule, // Que modulos puedo usar en mi modulo.
    ComponentsModule,
    FormsModule,
    PipesModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports:[], // Qué componentes/modulos exporta nuestro modulo
  providers:[]
})
export class PagesModule { }

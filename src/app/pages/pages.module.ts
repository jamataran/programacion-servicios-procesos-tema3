import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ComponentsModule} from "../components/components.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PipesModule} from "../pipes/pipes.module";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule, // Que modulos puedo usar en mi modulo.
    ComponentsModule,
    FormsModule,
    PipesModule,
    ReactiveFormsModule
  ],
  exports:[], // Qué componentes/modulos exporta nuestro modulo
  providers:[]
})
export class PagesModule { }

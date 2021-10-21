import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversedPipe } from './reversed.pipe';



@NgModule({
  declarations: [
    ReversedPipe
  ],
  exports: [
    ReversedPipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

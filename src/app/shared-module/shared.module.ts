import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HeaderComponent
  ],
  declarations: [HeaderComponent]
})
export class SharedModule { }

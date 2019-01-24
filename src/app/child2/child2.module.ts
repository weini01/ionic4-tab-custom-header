import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule as COMMON } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "../common/common.module";
import { Child2Page } from './child2.page';

@NgModule({
  imports: [
    IonicModule,
    COMMON,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Child2Page }])
  ],
  declarations: [Child2Page]
})
export class Child2Module { }

import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule as COMMON } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "../common/common.module";
import { Tab2Page } from './tab2.page';

@NgModule({
  imports: [
    IonicModule,
    COMMON,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab2Page },
      { path: 'child', loadChildren: '../child/child.module#ChildModule' },
      { path: 'child2', loadChildren: '../child2/child2.module#Child2Module' }
    ])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule { }

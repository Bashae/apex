import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LegendPage } from './legend.page';
import { LegendComponent } from './legend.component';

const routes: Routes = [
  {
    path: '',
    component: LegendPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LegendPage, LegendComponent]
})
export class LegendPageModule {}

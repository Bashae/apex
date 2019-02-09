import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WeaponPage } from './weapon.page';
import { WeaponComponent } from './weapon.component';

const routes: Routes = [
  {
    path: '',
    component: WeaponPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WeaponPage, WeaponComponent]
})
export class WeaponPageModule {}

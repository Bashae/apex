import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AttachmentPage } from './attachment.page';
import { AttachmentComponent } from './attachment.component';

const routes: Routes = [
  {
    path: '',
    component: AttachmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AttachmentPage, AttachmentComponent]
})
export class AttachmentPageModule {}

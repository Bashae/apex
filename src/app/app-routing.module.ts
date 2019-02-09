import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'legends', loadChildren: './legends/legends.module#LegendsPageModule' },
  { path: 'legend', loadChildren: './legend/legend.module#LegendPageModule' },
  { path: 'weapons', loadChildren: './weapons/weapons.module#WeaponsPageModule' },
  { path: 'weapon', loadChildren: './weapon/weapon.module#WeaponPageModule' },
  { path: 'attachments', loadChildren: './attachments/attachments.module#AttachmentsPageModule' },
  { path: 'attachment', loadChildren: './attachment/attachment.module#AttachmentPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

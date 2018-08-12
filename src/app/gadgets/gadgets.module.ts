import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';

const routes: Routes =  [
  { path: 'gallery', component: GalleryComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    routing
  ],
  declarations: [GalleryComponent, GalleryDetailComponent],
  exports: [GalleryComponent, GalleryDetailComponent]
})
export class GadgetsModule { }

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GadgetsModule } from '../gadgets/gadgets.module';
import { DetailComponent } from './detail/detail.component';

const routes: Routes =  [
  { path: 'list', component: ListComponent },
  { path: 'detail', component: DetailComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    routing,
    GadgetsModule,

    MatCardModule,
    MatButtonModule
  ],
  declarations: [ListComponent, DetailComponent]
})
export class ProductsModule { }

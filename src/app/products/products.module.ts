import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { GadgetsModule } from '../gadgets/gadgets.module';
import { DetailComponent } from './detail/detail.component';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';

const routes: Routes =  [
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'detail', component: DetailComponent, canActivate: [AuthGuard] }
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

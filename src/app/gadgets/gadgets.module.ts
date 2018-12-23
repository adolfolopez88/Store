import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule, MatButtonModule, MatProgressBarModule, MatTabsModule, MatIconModule,
  MatListModule, MatTableModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule,
  MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailComponent } from './gallery-detail/gallery-detail.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { MessageComponent } from './message/message.component';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes =  [
  { path: 'gallery', component: GalleryComponent },
  { path: 'upload', component: FileUploadComponent },
  { path: 'test', component: TestComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    routing,

    AngularFireStorageModule,

    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatTabsModule,
    MatProgressBarModule,
    MatSnackBarModule,

  ],
  declarations: [
    GalleryComponent,
    GalleryDetailComponent,
    FileUploadComponent,
    MessageComponent,
    TestComponent,
    MessageListComponent
  ],
  exports: [
    GalleryComponent,
    GalleryDetailComponent,
    FileUploadComponent,
    MessageComponent,
    MessageListComponent
  ]
})
export class GadgetsModule { }

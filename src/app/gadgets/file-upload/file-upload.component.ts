import { File, FirestorageGenericService } from '../../services/firestorage-generic';
import { Component, OnInit, Input  } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { FirestoreGenericService } from 'src/app/services/firestore-generic.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  uploadProgress: Observable<number>;
  storageRef: AngularFireStorageReference;
  task: AngularFireUploadTask;
  file: any;
  files: any[] = [];

  @Input() docPath = '';

  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private afStorage: AngularFireStorage, private fstorageService: FirestorageGenericService,
    private snackBar: MatSnackBar, private fs: FirestoreGenericService) { }

  ngOnInit() {
  /*   console.log('ref: ' + this.refCol);
    this.dataService.getDocumentFiles(this.refCol, this.key).subscribe((files) => {
       this.files = files;
    }); */
  }

  public getFile(event) {
    this.file = event.target.files[0];
  }


  public upload() {

    const fileId = Math.random().toString(36).substring(2);
    this.storageRef = this.afStorage.ref(fileId);
    this.task = this.storageRef.put(this.file);
    this.uploadProgress = this.task.percentageChanges();


    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.storageRef.getDownloadURL().subscribe((url) => {

          const file: File = {
            id: fileId,
            name: this.file.name,
            url: url,
            type: this.file.type,
            extension: this.file.name.split('.').pop(),
            size: this.file.size,
            created: Date.now()
          };

          this.fstorageService.addRefFileToObject(this.docPath, file);
          this.snackBar.open('File Upload', null, { duration: 2000 });

        });
      })
    ).subscribe();
  }




/*
  public upload() {

    const fileId = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(fileId);
    this.task = this.ref.put(this.file);
    this.uploadProgress = this.task.percentageChanges();

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe((url) => {

          const file: File = {
            id: fileId,
            name: this.file.name,
            url: url,
            type: this.file.type,
            extension: this.file.name.split('.').pop(),
            size: this.file.size,
            created: Date.now()
          };

          this.dataService.addRefFileToObject(this.refCol, this.key, file);
          this.snackBar.open('File Upload', null, { duration: 2000 });

        });
      })
    ).subscribe();
  }
 */

}

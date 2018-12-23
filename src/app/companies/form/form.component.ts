import { FirestoreGenericService } from './../../services/firestore-generic.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  path = 'companies';
  docPath = '';
  employerForm = this.formBuilder.group({
    name: ['', Validators.required]
  });
  submitted = false;
  constructor(private formBuilder: FormBuilder, private fs: FirestoreGenericService) { }

  ngOnInit() {

  }

  public register() {
    this.submitted = true;

    if (this.employerForm.invalid) {
      return;
    }

    this.fs.add(this.path, this.employerForm.value).then(() => { console.log('register successful'); });
  }

  get form() {
    return this.employerForm.controls;
  }
}

import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { FirestoreGenericService } from './../../services/firestore-generic.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { startWith, map } from 'rxjs/operators';

export interface Option {
  key: string;
  value: string;
  photoUrl: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() options: Option[] = [];
  @Input('submittedError') submittedError = false;
  @Output('optionsList') optionsList = new EventEmitter<any[]>();
  inputControl = new FormControl();
  filteredOptions: Observable<Option[]>;
  selectedOption: Option;
  optionsSelected: Option[] = [];

  constructor(private fs: FirestoreGenericService) { }

  ngOnInit() {

    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value === null ) { value = ''; }
        return this._filter(value);
      })
    );
  }

  displayFn(option: Option) {
    return option ? option.value : '' ;
  }

  returnFn($event) {
    this.selectedOption = $event.option.value;
  }

  addOption() {
    if (this.selectedOption) {
      this.optionsSelected.push(this.selectedOption);
      this.optionsList.emit(
      this.optionsSelected.map((member: Option) => {
        return  {uid: member.key, name: member.value, photoUrl: member.photoUrl };
      }));
      this.inputControl.reset();
    }
  }

  private _filter(res: any): Option[] {
    const filterValue = typeof res === 'string' && res !== null ? res.toLowerCase() : res.value;
    return this.options.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
  }
}


import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Field, NgrxFormsFacade } from '@myng/ngrx-forms';

import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ContactsFacade } from './+state/contacts.facade';

const structure: Field[] = [
  {
    type: 'INPUT',
    name: 'name',
    placeholder: 'Name',
    validator: [Validators.required]
  },
  {
    type: 'INPUT',
    name: 'email',
    placeholder: "Email",
    validator: [Validators.required, Validators.email]
  },
  {
    type: 'INPUT',
    name: 'subject',
    placeholder: "Subject",
    validator: [Validators.required]
  },
  {
    type: 'TEXTAREA',
    name: 'message',
    placeholder: 'Write your message (in markdown)',
    validator: [Validators.required]
  }
];

@Component({
  selector: 'angular-ngrx-nx-realworld-example-app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  structure$: Observable<Field[]>;
  data$: Observable<any>;

  constructor(private ngrxFormsFacade: NgrxFormsFacade, private router: Router, private facade: ContactsFacade) { }

  ngOnInit() {
    this.ngrxFormsFacade.setStructure(structure);
    this.data$ = this.ngrxFormsFacade.data$;
    this.structure$ = this.ngrxFormsFacade.structure$;
    this.facade.message$.subscribe(message => this.ngrxFormsFacade.setData(message));
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }

  submit() {
    console.log('submited');
    this.facade.publishContacts();
  }

  ngOnDestroy() {
    this.ngrxFormsFacade.initializeForm();
    this.facade.initializeContacts();
  }

}

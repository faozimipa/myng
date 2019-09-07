import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgrxFormsModule } from '@myng/ngrx-forms';
import { SharedModule } from '@myng/shared';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CONTACTS_FEATURE_KEY,
  initialState as contactsInitialState,
  contactsReducer
} from './+state/contacts.reducer';
import { ContactsEffects } from './+state/contacts.effects';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts.component';
import { ContactsFacade } from './+state/contacts.facade';
import { ContactsService } from './contacts.service';

@NgModule({
  imports: [
    CommonModule,
    NgrxFormsModule,
    RouterModule.forChild([{ path: '', component: ContactsComponent }]),
    StoreModule.forFeature(CONTACTS_FEATURE_KEY, contactsReducer, {
      initialState: contactsInitialState
    }),
    EffectsModule.forFeature([ContactsEffects]),
    SharedModule
  ],
  declarations: [ContactFormComponent, ContactsComponent],
  providers: [ContactsEffects, ContactsService, ContactsFacade] // ContactsService, EditorResolverService,
})
export class ContactsModule { }

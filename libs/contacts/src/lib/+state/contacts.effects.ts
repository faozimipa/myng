import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';

import { ContactsPartialState } from './contacts.reducer';

import { ContactsService } from '../contacts.service';
import {
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError,
  ContactsActionTypes,
  PublishContacts
} from './contacts.actions';
import { withLatestFrom, concatMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { SetErrors, NgrxFormsFacade } from '@myng/ngrx-forms';

@Injectable()
export class ContactsEffects {
  @Effect()
  editor = this.actions.pipe(
    ofType<PublishContacts>(ContactsActionTypes.PUBLISH_CONTACT),
    withLatestFrom(this.ngrxFormsFacade.data$),
    concatMap(([_, data]) =>
      this.contactsService.publishContacts(data).pipe(
        map(result => ({
          type: '[router] Go',
          payload: { path: ['contacts'] }
        })),
        catchError(result => of(new SetErrors(result.error.errors)))
      )
    )
  );

  @Effect() loadContacts$ = this.dataPersistence.fetch(
    ContactsActionTypes.LoadContacts,
    {
      run: (action: LoadContacts, state: ContactsPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new ContactsLoaded([]);
      },

      onError: (action: LoadContacts, error) => {
        console.error('Error', error);
        return new ContactsLoadError(error);
      }
    }
  );

  constructor(
    private actions: Actions,
    private dataPersistence: DataPersistence<ContactsPartialState>,
    private ngrxFormsFacade: NgrxFormsFacade,
    private contactsService: ContactsService
  ) { }
}

import { ContactsAction, ContactsActionTypes } from './contacts.actions';
import { MessageData } from '@myng/api';

export const CONTACTS_FEATURE_KEY = 'contacts';

/**
 * Interface for the 'Contacts' data used in
 *  - ContactsState, and
 *  - contactsReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ContactsState {
  message: MessageData;
  list: Entity[]; // list of Contacts; analogous to a sql normalized table
  selectedId?: string | number; // which Contacts record has been selected
  loaded: boolean; // has the Contacts list been loaded
  error?: any; // last none error (if any)
}

export interface ContactsPartialState {
  readonly [CONTACTS_FEATURE_KEY]: ContactsState;
}

export const initialState: ContactsState = {
  message:{
    name: '',
    subject: '',
    message: '',
    email: ''
  },
  list: [],
  loaded: false
};

export function contactsReducer(
  state: ContactsState = initialState,
  action: ContactsAction
): ContactsState {
  switch (action.type) {
    case ContactsActionTypes.ContactsLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CONTACTS_FEATURE_KEY, ContactsState } from './contacts.reducer';

// Lookup the 'Contacts' feature state managed by NgRx
const getContactsState = createFeatureSelector<ContactsState>(
  CONTACTS_FEATURE_KEY
);

const getMessage = createSelector(
  getContactsState,
  (state: ContactsState) => state.message
);

const getLoaded = createSelector(
  getContactsState,
  (state: ContactsState) => state.loaded
);
const getError = createSelector(
  getContactsState,
  (state: ContactsState) => state.error
);

const getAllContacts = createSelector(
  getContactsState,
  getLoaded,
  (state: ContactsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getContactsState,
  (state: ContactsState) => state.selectedId
);
const getSelectedContacts = createSelector(
  getAllContacts,
  getSelectedId,
  (contacts, id) => {
    const result = contacts.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const contactsQuery = {
  getMessage,
  getLoaded,
  getError,
  getAllContacts,
  getSelectedContacts
};

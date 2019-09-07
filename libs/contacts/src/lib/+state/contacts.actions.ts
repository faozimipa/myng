import { Action } from '@ngrx/store';
import { Entity } from './contacts.reducer';

export enum ContactsActionTypes {
  INITIALIZE_CONTACT = '[Contacts] Initialize Contacts',
  PUBLISH_CONTACT = '[Contacts] Pubblish Contacts',
  LoadContacts = '[Contacts] Load Contacts',
  ContactsLoaded = '[Contacts] Contacts Loaded',
  ContactsLoadError = '[Contacts] Contacts Load Error'
}

export class InitializeContacts implements Action {
  readonly type = ContactsActionTypes.INITIALIZE_CONTACT;
}

export class PublishContacts implements Action {
  readonly type = ContactsActionTypes.PUBLISH_CONTACT;
}


export class LoadContacts implements Action {
  readonly type = ContactsActionTypes.LoadContacts;
}

export class ContactsLoadError implements Action {
  readonly type = ContactsActionTypes.ContactsLoadError;
  constructor(public payload: any) {}
}

export class ContactsLoaded implements Action {
  readonly type = ContactsActionTypes.ContactsLoaded;
  constructor(public payload: Entity[]) {}
}

export type ContactsAction = InitializeContacts | PublishContacts | LoadContacts | ContactsLoaded | ContactsLoadError;

export const fromContactsActions = {
  InitializeContacts,
  PublishContacts,
  LoadContacts,
  ContactsLoaded,
  ContactsLoadError
};

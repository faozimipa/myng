import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { InitializeContacts, PublishContacts } from './contacts.actions';
import { ContactsState } from './contacts.reducer';
import { contactsQuery } from './contacts.selectors';

@Injectable()
export class ContactsFacade {
  message$ = this.store.select(contactsQuery.getMessage);

  constructor(private store: Store<ContactsState>) {}

  // loadArticle(slug: string) {
  //   this.store.dispatch(new LoadArticle(slug));
  // }

  // loadArticleSuccess(results: ArticleData) {
  //   this.store.dispatch(new LoadArticleSuccess(results));
  // }

  // loadArticleFail(error: Error) {
  //   this.store.dispatch(new LoadArticleFail(error));
  // }

  publishContacts() {
    this.store.dispatch(new PublishContacts());
  }

  initializeContacts() {
    this.store.dispatch(new InitializeContacts());
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, MessageData } from '@myng/api';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactsService {
  constructor(private apiService: ApiService) {}

  publishContacts(message): Observable<MessageData> {
    return this.apiService.post('/articles', { contacts: message }).pipe(map(data => data.message));
  }

  get(slug: string): Observable<MessageData> {
    return this.apiService.get('/articles/' + slug).pipe(map((data: any) => data.article));
  }
}

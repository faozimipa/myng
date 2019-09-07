import { ApiService } from '@myng/api';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {
  constructor(private apiService: ApiService) {}

  getTags(): Observable<any> {
    return this.apiService.get('/tags');
  }
}

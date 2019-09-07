import { async, TestBed } from '@angular/core/testing';
import { ContactsModule } from './contacts.module';

describe('ContactsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ContactsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ContactsModule).toBeDefined();
  });
});

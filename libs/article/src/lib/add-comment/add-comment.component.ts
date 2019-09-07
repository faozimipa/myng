import { ArticleData, User } from '@myng/api';
import { Field } from '@myng/ngrx-forms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCommentComponent {
  @Input() article: ArticleData;
  @Input() currentUser: User;
  @Input() data$: Observable<any>;
  @Input() structure$: Observable<Field[]>;
  @Input() touchedForm$: Observable<boolean>;
  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();
  @Output() updateForm: EventEmitter<any> = new EventEmitter();
}

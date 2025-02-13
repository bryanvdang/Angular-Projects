import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../share/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() wasSelected = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  onSelectUser() {
    this.wasSelected.emit(this.user.id);
  }
}

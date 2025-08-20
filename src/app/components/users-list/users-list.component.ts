import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-users-list',
  standalone: false,
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss'
})
export class UsersListComponent {

  displayedColumns = [
    'name', 'date', 'status'
  ]

  @Input({ required: true}) usersLists:IUser[] = [];

  @Output('userSelected') userSelectedEmmit = new EventEmitter<IUser>();

  onUserSelected(user: IUser){
    console.log('user: ', user);

    this.userSelectedEmmit.emit(user);

  }
}

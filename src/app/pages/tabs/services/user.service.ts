import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Food } from '../shared/food';
import { User } from '../shared/user';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  usersKey = 'users';

  constructor() {
    if(!localStorage.getItem('users')) {
        let users = [{
          "id": 1,
          "name": "Joel Oos",
          "phone": "0864562321",
          "email":"joeloos@gmail.com"
        },
       ]
       localStorage.setItem(this.usersKey, JSON.stringify(users))
      }
   }

  getItems(): any[] {
    const items = JSON.parse(localStorage.getItem(this.usersKey)!);
    return items ? items : [];
  }

  getUsers(): User[] {
    const usersJson = localStorage.getItem(this.usersKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  addUser(user: any): void {
    const users = this.getItems();
    users.push(user);
    const usersJson = JSON.stringify(users);
    localStorage.setItem(this.usersKey, usersJson);
  }

  editUser(user: any): void {
    const users = this.getUsers();
    const index = users.findIndex(u => u.id === user.id);
    if (index >= 0) {
      users[index] = user;
      const usersJson = JSON.stringify(users);
      localStorage.setItem(this.usersKey, usersJson);
    }
  }

  saveUsers(users: User[]): void {
    localStorage.setItem(this.usersKey, JSON.stringify(users));
  }
}

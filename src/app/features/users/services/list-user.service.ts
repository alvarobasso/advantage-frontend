import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class ListUserService {
  private users$ = new BehaviorSubject<User[]>([]);
  selectedUser$ = this.users$.asObservable();
  constructor() {
  }
  setUser(user: any) {
    this.users$.next(user);
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAll(): Observable<UserData> {
    return this.http.get<UserData>(this.apiUrl+'/users');
  }

  getUser(id: any): Observable<UserData> {
    return this.http.get<UserData>(`${this.apiUrl}/users/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl+'/users', data);
  }

  // update(id: any, data: any): Observable<any> {
  //   return this.http.put(`${baseUrl}/${id}`, data);
  // }

  // delete(id: any): Observable<any> {
  //   return this.http.delete(`${baseUrl}/${id}`);
  // }

  // deleteAll(): Observable<any> {
  //   return this.http.delete(baseUrl);
  // }

  // findByTitle(title: any): Observable<Tutorial[]> {
  //   return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  // }

}

import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from '../services/user.service';
import { UserData, User } from '../models/user.model';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ListUserService } from '../services/list-user.service';
import { DecodeSignComponent } from '../decode-sign/decode-sign.component';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['nameUser', 'dateBirth', 'email', 'phoneNumber', 'actions'];
  dataSource!: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: User[];

  constructor(
    private userService: UserService,
    private listUserService: ListUserService,
    public dialog: MatDialog
  ) {
    this.users = [];

    this.listUserService.selectedUser$.subscribe((value) => {
      this.users = value;
      this.dataSource = new MatTableDataSource(this.users);

    });    

  }

  ngOnInit(): void {
    
    this.retrieveUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  retrieveUsers(): void {
    this.userService.getAll()
      .subscribe({
        next: (data) => {
          if(data.data != undefined){
            this.users = data.data;
            this.dataSource = new MatTableDataSource(this.users);  
          }

        },
        error: (e) => console.error(e)
      });
  }

  openAddUserDialog(): void {
    this.dialog.open(AddUserComponent,
      {
        width: '400px',
      });
  }

  openSignDialog(id:string): void {
    this.dialog.open(DecodeSignComponent,
      {
        // width: '400px',
        data: { id: id }
      });
  }

  deleteUser(id: string): void {
    this.userService.delete(id)
      .subscribe({
        next: (data) => {
          this.retrieveUsers();
        },
        error: (e) => console.error(e)
      });
  }

}
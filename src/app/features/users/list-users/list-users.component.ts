import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { UserService } from '../services/user.service';
import { UserData, User } from '../models/user.model';
import { AddUserComponent } from '../add-user/add-user.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  displayedColumns: string[] = ['nameUser', 'dateBirth', 'email', 'phoneNumber'];
  dataSource: MatTableDataSource<User>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users?: User[];

  constructor(
    private userService: UserService,
    public dialog: MatDialog
    ) {
    this.dataSource = new MatTableDataSource(this.users);
    
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
          this.users = data.data;
          this.dataSource = new MatTableDataSource(this.users);
        },
        error: (e) => console.error(e)
      });
  }

  openAddUserDialog(): void {
    this.dialog.open(AddUserComponent, 
      {
        width: '400px',
      });
    // const dialogRef = this.dialog.open(AddUserComponent, {
    //   width: '250px',
    //   // data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });
  }

}
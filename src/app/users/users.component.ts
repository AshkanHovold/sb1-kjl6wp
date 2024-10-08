import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClient } from '@angular/common/http';

interface User {
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatProgressSpinnerModule],
  template: `
    <h2>Users</h2>
    <div *ngIf="loading" class="spinner-container">
      <mat-spinner></mat-spinner>
    </div>
    <mat-table *ngIf="!loading" [dataSource]="users">
      <ng-container matColumnDef="id">
        <mat-header-cell *matHeaderCellDef> ID </mat-header-cell>
        <mat-cell *matCellDef="let user"> {{user.id}} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="name">
        <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
        <mat-cell *matCellDef="let user"> {{user.name}} </mat-cell>
      </ng-container>
      <ng-container matColumnDef="email">
        <mat-header-cell *matHeaderCellDef> Email </mat-header-cell>
        <mat-cell *matCellDef="let user"> {{user.email}} </mat-cell>
      </ng-container>
      <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
      <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
    </mat-table>
  `,
  styles: [`
    mat-table {
      width: 100%;
    }
    .spinner-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
    }
  `]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedColumns: string[] = ['id', 'name', 'email'];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('http://localhost:3000/users').subscribe(
      (data) => {
        this.users = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    );
  }
}
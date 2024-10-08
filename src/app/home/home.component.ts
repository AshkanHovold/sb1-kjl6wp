import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Welcome to the Home Page</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>This is the home page of our Angular Dark Mode App.</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class HomeComponent {}
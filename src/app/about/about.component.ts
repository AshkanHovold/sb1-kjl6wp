import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>About Us</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>This is the about page of our application.</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class AboutComponent {}
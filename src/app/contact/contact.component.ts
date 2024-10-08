import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Contact Us</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>You can reach us at contact&#64;example.com</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class ContactComponent {}
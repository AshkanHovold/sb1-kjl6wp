import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [MatCardModule],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Pricing</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>Check out our competitive pricing options.</p>
      </mat-card-content>
    </mat-card>
  `,
})
export class PricingComponent {}
import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `<div>
    <mat-toolbar color="primary">LocalCast Weather</mat-toolbar>
    <div fxLayoutAlign="center">
      <div class="mat-caption vertical-margin">Your city, your forecast, right now!</div>
    </div>
    <div fxLayout="row">
      <div fxFlex></div>
      <mat-card fxFlex="300px">
        <mat-card-header>
          <mat-card-title class="mat-headline">Current Weather</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <app-current-weather></app-current-weather>
        </mat-card-content>
      </mat-card>
      <div fxFlex></div>
    </div>
  </div>`,
})
export class AppComponent {}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  kilometers: number = 0;
  miles: number = 0;

  convertToMiles() {
    this.miles = this.kilometers * 0.621371;
  }

  convertToKilometers() {
    this.kilometers = this.miles / 0.621371;
  }
}

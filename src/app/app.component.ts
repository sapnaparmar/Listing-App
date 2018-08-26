import { Component } from '@angular/core';
import { cribs } from './../data/cribs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listing-App...';
  cribs: Array<any> = cribs;
}

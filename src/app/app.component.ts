import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Add Buyers Details', url: '/buyer-details', icon: 'add-circle' },
    { title: 'Sell Details', url: '/seller-details', icon: 'log-out' },
    { title: 'Search Phone', url: '/search', icon: 'search' },
    { title: 'Sales Report', url: '/sales-report', icon: 'basket' },
    { title: 'Stock', url: '/stock', icon: 'bar-chart' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

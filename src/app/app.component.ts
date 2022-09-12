import { Component } from '@angular/core';

@Component({
  selector: 'app-root',   // html tag embed the component
  templateUrl: './app.component.html',  // html file
  styleUrls: ['./app.component.css']  //can have more one
})
export class AppComponent {   // properties and methods
  title: string = 'Task Tracker';
}

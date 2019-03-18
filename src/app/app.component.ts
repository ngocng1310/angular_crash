import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = 'Ngoc';
  constructor() {
    this.changeName('Ngoc Nguyen');
  }
  
  changeName(name: string): void {
    this.name = name;
  }
}
 
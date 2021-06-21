import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Out';

  userLoggedIn= false;

  greet(name: string){
    alert("Hello "+ name);
  }
}

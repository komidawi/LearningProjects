import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordVisible = false;
  clicks = [];

  onButtonClicked() {
    this.passwordVisible = !this.passwordVisible;
    this.clicks.push(this.clicks.length + 1)
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form about you';
  treatment = 'Dear user please, write your interests';
  userName = ' ';
  listOfInterests = ['music'];
  interest = '';
  handleClick(){
    this.listOfInterests.push(this.interest);
  }
  backgroundColor = true;

}

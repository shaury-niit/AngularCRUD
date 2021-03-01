import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome Coforge-App';

  today = new Date();

  //define one more property
  clickMessage:string="status";

  onClickMe(){
    console.log("Event fired---!");
    this.clickMessage = "Training is Active";
  }


}

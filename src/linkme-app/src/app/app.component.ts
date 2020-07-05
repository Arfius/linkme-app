import { Component } from '@angular/core';
import { LinkmeService } from "./services/linkme.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private lms: LinkmeService) {}
  //credenziali

  doLogin(lf:NgForm)
  {
    this.lms.login(lf.value).subscribe(data => {
      
      if (lf.value.hasOwnProperty('access-token')) {
        console.log(lf.value);
      }

    });
  }

}

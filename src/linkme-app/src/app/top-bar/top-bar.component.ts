import { Component, Input, OnInit } from '@angular/core';
import { LinkmeService } from "../services/linkme.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private lms: LinkmeService) { }
  ngOnInit() {
  }
  createBloB()
  {
    this.lms.download().subscribe(data => {
      var blob = new Blob([JSON.stringify(data)], { type: 'text/json' });
      var url= window.URL.createObjectURL(blob);
      window.open(url);
      });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkmeService } from "../services/linkme.service";
import { TopBarComponent } from '../top-bar/top-bar.component'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router,private lms: LinkmeService) { }
  list:any=[];

  ngOnInit() {

    var self=this;
    this.lms.download().subscribe(data => {
      self.list=data;
      });
  }

}

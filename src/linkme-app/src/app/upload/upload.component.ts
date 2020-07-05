import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkmeService } from "../services/linkme.service";
import { TopBarComponent } from '../top-bar/top-bar.component'

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private router: Router,private lms: LinkmeService) { }
  loading_status="";
  ngOnInit() {
  }


  //Eseguo il parser della data
  //Le specifiche indicano il
  //seguente formato di input dd/mm/yyyy
  //Il metodo ritorna un oggetto Date
  parsingData(data:String)
  {
    let array= data.split('/');
    let d= new Date();
    d.setFullYear(parseInt(array[2]));
    d.setMonth(parseInt(array[1])-1);
    d.setDate(parseInt(array[0]));
    return d;
  }

  onFileChange(event) {
    let reader = new FileReader();
    var self= this;
    if(event.target.files && event.target.files.length > 0) {
      
      let file = event.target.files[0];
      reader.onloadend = function(e){
        self.loading_status="upload al server...";
        let dt= JSON.parse(reader.result);
        dt.forEach(element => { element.birthday = self.parsingData(element.birthday) });
        self.lms.save(dt).subscribe(data => {
          self.loading_status=(data.status)?dt.length+"Customer loaded!":"Error during loading.";
        });
      }
      reader.readAsText(file);
    }
  }

}

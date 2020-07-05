import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Imporatti per il progetto
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { LinkmeService } from "./services/linkme.service";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { ListComponent } from './list/list.component';
import { TopBarComponent } from './top-bar/top-bar.component';

//routing conf
const appRoutes: Routes = [
  { path: 'app-home',   component: HomeComponent },
  { path: 'app-list',   component: ListComponent },
  { path: 'app-upload', component: UploadComponent },  
  { path: '**',         component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    ListComponent,
    TopBarComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [LinkmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

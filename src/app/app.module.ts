import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { ApplicationPreviewComponent } from './application-preview/application-preview.component';
import { AppRoutingModule } from './/app-routing.module';
import { DataService } from "./data.service";
import { UtilService } from "./util.service";

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    ApplicationPreviewComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

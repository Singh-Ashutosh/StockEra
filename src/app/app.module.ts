import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './shared/module/component/component.module';
import { MaterialModule } from './shared/module/material/material.module';
import { HttpService, ApiService, UtilsService } from './shared/service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService, ApiService, UtilsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

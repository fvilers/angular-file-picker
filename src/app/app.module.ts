import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { AngularFilePickerModule } from '../lib';

import { AppComponent } from './app.component';
import { ReadModePipe } from './read-mode.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReadModePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    AngularFilePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

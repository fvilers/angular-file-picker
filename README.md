# angular-file-picker
A simple file picker for Angular

# Installation
Add the package to your application.

```
npm install --save angulare-file-picker
```

# Usage

Import the file picker module to your angular module.

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilePickerModule } from 'angular-file-picker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FilePickerModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Add the file picker directive to an element like a button.

```
<button type="button" ngFilePicker (filePick)="file = $event">Browse</button>
```

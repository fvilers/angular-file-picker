# angular-file-picker
A simple file picker for Angular

# Installation
Add the package to your application.

```
npm install --save angular-file-picker
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

Add the file picker directive to an element, like a button.

```
<button type="button" ngFilePicker>Browse</button>
```

Bind to the `filePick` event to get the picked file from the `$event` variable.

```
<button type="button" ngFilePicker (filePick)="file = $event">Browse</button>
```

The picked file implements the following interface:

```
export interface PickedFile {
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  dataURL: string;
}
```

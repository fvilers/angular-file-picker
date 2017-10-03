# angular-file-picker
A simple file picker for Angular

## Quick links
[API Reference](https://github.com/fvilers/angular-file-picker/wiki/api-reference), [Plunker demo](https://embed.plnkr.co/RRf82snZfOYVI7EN5NN6/).

## Installation
Add the package to your application.

```
npm install --save angular-file-picker
```

## Getting started

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
<button
  type="button"
  ngFilePicker
  (filePick)="file = $event">
  Browse
</button>
```

Use the optional `accept` attribute to indicate the types of files that the control can select.

```
<button
  type="button"
  ngFilePicker
  accept="image/*"
  (filePick)="file = $event">
  Browse
</button>
```

Use the optional `multiple` attribute to indicate whether the user can pick more than one file.

```
<button
  type="button"
  ngFilePicker
  accept="image/*"
  multiple
  (filePick)="file = $event">
  Browse
</button>
```

The picked file implements the following interface:

```
interface PickedFile {
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  dataURL: string;
}
```

## Note
If you liked the `angular-file-picker` directive, you should have a look at the [angular-file-dropzone](https://github.com/fvilers/angular-file-dropzone).

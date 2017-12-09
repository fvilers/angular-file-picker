# angular-file-picker
A simple file picker for Angular

## Quick links
- [API Reference](https://github.com/fvilers/angular-file-picker/wiki/api-reference)
- [Demo](https://fvilers.github.io/angular-file-picker/index.html)

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
import { AngularFilePickerModule } from 'angular-file-picker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFilePickerModule
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

Select how the file should be read; by default the mode is dataUrl. Available read modes are exposed through the ReadMode enum.

```
<button type="button" [ngFilePicker]="readMode">Browse</button>
```

```
enum ReadMode {
  arrayBuffer,
  binaryString,
  dataURL,
  text
}
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

The directive also has a `reset()` method that unset the selected file. This is useful if you want to force the `filePick` event to trigger again even if the user has picked the same file.

```
export class MyComponent {
  ...
  @ViewChild(FilePickerDirective)
  private filePicker;
  ...

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    this.filePicker.reset();
  }
}
```

There are two more events that can be listened to:
- `readStart`: triggered when the directive start to read files;
- `readEnd`: triggered when the directive has read all the files.

These two events emit the number of file (`$event` variable) to be or that has been read.

## Note
If you liked the `angular-file-picker` directive, you should have a look at the [angular-file-dropzone](https://github.com/fvilers/angular-file-dropzone).

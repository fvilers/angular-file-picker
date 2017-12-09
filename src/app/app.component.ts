import { Component, ViewChild } from '@angular/core';

import { FilePickerDirective, PickedFile, ReadMode } from '../lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readMode = ReadMode.dataURL;
  public picked: PickedFile;
  public status: string;

  @ViewChild(FilePickerDirective)
  private filePicker;

  onReadStart(fileCount: number) {
    this.status = `Reading ${fileCount} file(s).`;
  }

  onFilePicked(file: PickedFile) {
    this.picked = file;
  }

  onReadEnd(fileCount: number) {
    this.status = `Read ${fileCount} file(s) on ${new Date().toLocaleTimeString()}.`;
    this.filePicker.reset();
  }
}

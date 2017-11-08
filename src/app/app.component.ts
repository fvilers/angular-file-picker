import { Component } from '@angular/core';

import { PickedFile, ReadMode } from '../lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public readMode = ReadMode.dataURL;
  public picked: PickedFile;

  onFilePicked(file: PickedFile) {
    this.picked = file;
  }
}

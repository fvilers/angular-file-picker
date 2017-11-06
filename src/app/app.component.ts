import { Component } from '@angular/core';

import { PickedFile } from './modules/angular-file-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public picked: PickedFile;

  onFilePicked(file: PickedFile) {
    this.picked = file;
  }
}

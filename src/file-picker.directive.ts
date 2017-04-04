import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  OnInit,
  Output,
  Renderer
} from '@angular/core';

import { PickedFile } from './picked-file';
import { PickedFileImpl } from './picked-file-impl';

@Directive({
  selector: '[ngFilePicker]'
})
export class FilePickerDirective implements OnInit {
  @Output()
  public filePick = new EventEmitter<PickedFile>();
  
  private input: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.input = this.renderer.createElement(this.el.nativeElement.parentNode, 'input');
    this.renderer.setElementAttribute(this.input, 'type', 'file');
    this.renderer.setElementStyle(this.input, 'display', 'none');

    this.renderer.listen(this.input, 'change', (event: any) => {
      if (event.target.files.length < 1) {
        return;
      }
      
      this.readFile(event.target.files[0]);
    });
  }

  @HostListener('click')
  browse() {
    this.renderer.invokeElementMethod(this.input, 'click');
  }

  private readFile(file: File) {
    const reader = new FileReader();

    reader.onload = (loaded: ProgressEvent) => {
      const fileReader = loaded.target as FileReader;
      const pickedFile = new PickedFileImpl(file.lastModifiedDate, file.name, file.size, file.type, fileReader.result);
      
      this.filePick.emit(pickedFile);
    };

    reader.readAsDataURL(file);
  }
}

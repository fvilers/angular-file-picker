import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
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
  @Input()
  public accept = '';

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: any) { this._multiple = coerceBooleanProperty(value); }

  @Output()
  public filePick = new EventEmitter<PickedFile>();

  private _multiple: boolean;
  private input: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.input = this.renderer.createElement(this.el.nativeElement.parentNode, 'input');
    this.renderer.setElementAttribute(this.input, 'type', 'file');
    this.renderer.setElementAttribute(this.input, 'accept', this.accept);
    this.renderer.setElementStyle(this.input, 'display', 'none');

    if (this.multiple) {
      this.renderer.setElementAttribute(this.input, 'multiple', 'multiple');
    }

    this.renderer.listen(this.input, 'change', (event: any) => {
      if (event.target.files.length < 1) {
        return;
      }

      for (let file of event.target.files) {
        this.readFile(file);
      }
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

function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

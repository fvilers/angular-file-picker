import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  HostListener,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

import { PickedFile } from './picked-file';
import { PickedFileImpl } from './picked-file-impl';
import { ReadMode } from './read-mode.enum';

@Directive({
  selector: '[ngFilePicker]'
})
export class FilePickerDirective implements OnInit {
  @Input()
  public accept = '';

  @Input()
  get multiple() { return this._multiple; }
  set multiple(value: any) { this._multiple = coerceBooleanProperty(value); }

  @Input('ngFilePicker') readMode: ReadMode;

  @Output()
  public filePick = new EventEmitter<PickedFile>();

  private _multiple: boolean;
  private input: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  public ngOnInit() {
    this.input = this.renderer.createElement('input');
    this.renderer.appendChild(this.el.nativeElement, this.input);

    this.renderer.setAttribute(this.input, 'type', 'file');
    this.renderer.setAttribute(this.input, 'accept', this.accept);
    this.renderer.setStyle(this.input, 'display', 'none');

    if (this.multiple) {
      this.renderer.setAttribute(this.input, 'multiple', 'multiple');
    }

    this.renderer.listen(this.input, 'change', (event: any) => {
      for (const file of event.target.files) {
        this.readFile(file);
      }
    });
  }

  public reset() {
    if (!this.input) {
      console.error('It seems that ngOnInit() has not been executed or that the hidden input element is null. Did you mess with the DOM?');
      return;
    }

    this.input.value = null;
  }

  @HostListener('click')
  private browse() {
    if (!this.input) {
      console.error('It seems that ngOnInit() has not been executed or that the hidden input element is null. Did you mess with the DOM?');
      return;
    }

    this.input.click();
  }

  private readFile(file: File) {
    const reader = new FileReader();

    reader.onload = (loaded: ProgressEvent) => {
      const fileReader = loaded.target as FileReader;
      const pickedFile = new PickedFileImpl(file.lastModifiedDate, file.name, file.size, file.type, this.readMode, fileReader.result);

      this.filePick.emit(pickedFile);
    };

    switch (this.readMode) {
      case ReadMode.arrayBuffer:
        reader.readAsArrayBuffer(file);
        break;
      case ReadMode.binaryString:
        reader.readAsBinaryString(file);
        break;
      case ReadMode.text:
        reader.readAsText(file);
        break;
      case ReadMode.dataURL:
      default:
        reader.readAsDataURL(file);
        break;
    }
  }
}

function coerceBooleanProperty(value: any): boolean {
  return value != null && `${value}` !== 'false';
}

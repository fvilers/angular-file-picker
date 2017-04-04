import { Directive, ElementRef, EventEmitter, HostListener, OnInit, Output, Renderer } from '@angular/core';

@Directive({
  selector: '[ngFilePicker]'
})
export class FilePickerDirective implements OnInit {
  @Output()
  public filePick = new EventEmitter();
  
  private input: any;

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    this.input = this.renderer.createElement(this.el.nativeElement.parentNode, 'input');
    this.renderer.setElementAttribute(this.input, 'type', 'file');
    this.renderer.setElementStyle(this.input, 'display', 'none');

    this.renderer.listen(this.input, 'change', (event: any) => {
      this.filePick.emit(event.target.files[0]);
    });
  }

  @HostListener('click')
  browse() {
    this.renderer.invokeElementMethod(this.input, 'click');
  }
}

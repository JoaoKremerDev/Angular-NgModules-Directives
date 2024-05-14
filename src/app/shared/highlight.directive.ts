import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HightlightDirective {
  @Input() defaultColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.highlightColor;
  }

  constructor() {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
}

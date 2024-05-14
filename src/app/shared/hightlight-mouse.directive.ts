import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[hightlightMouse]',
})
export class HightlightMouseDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'white';
  // @HostBinding('style.backgroundColor') get setColor() {
  //   return this.backgroundColor;
  // }

  // private backgroundColor: string = '';

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._ElementRef.nativeElement,
    //   'background',
    //   'yellow'
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._ElementRef.nativeElement,
    //   'background',
    //   'white'
    this.backgroundColor = 'white';
  }

  constructor(private _ElementRef: ElementRef, private _renderer: Renderer2) {}
}

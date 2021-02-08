import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStyle]',
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyle: {
    border?: string;
    fontWieght?: string;
    borderRadius?: string;
  };

  @HostBinding('style.color') elColor = null; // В скобках что хочем изменить

  constructor(private el: ElementRef, private r: Renderer2) {}

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(
    //   this.el.nativeElement,
    //   'fontWieght',
    //   this.dStyle.fontWieght
    // );
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyle.border);
    // this.r.setStyle(
    //   this.el.nativeElement,
    //   'borderRadius',
    //   this.dStyle.borderRadius
    // );
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = '';
    //this.r.setStyle(this.el.nativeElement, 'color', '');
    //this.r.setStyle(this.el.nativeElement, 'fontWieght', '');
    //this.r.setStyle(this.el.nativeElement, 'border', '');
    //this.r.setStyle(this.el.nativeElement, 'borderRadius', '');
  }
}

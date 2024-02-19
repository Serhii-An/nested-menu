import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdownToggle]'
})
export class DropdownToggleDirective implements OnInit {
  @Input() childrenqQantity: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit() {
    if (this.childrenqQantity > 0) {
      this.renderer.setAttribute(this.el.nativeElement, 'data-bs-toggle', "dropdown");
      this.renderer.setAttribute(this.el.nativeElement, 'role', "button");
      this.renderer.setAttribute(this.el.nativeElement, 'aria-expanded', "false");
      this.el.nativeElement.classList.add('dropdown-toggle');
    }
  }
}

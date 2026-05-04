import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly elementRef = inject<ElementRef<HTMLInputElement>>(ElementRef);

  public ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }
}

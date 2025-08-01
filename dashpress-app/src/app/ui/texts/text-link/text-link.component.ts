import { Component, ElementRef, inject, input } from '@angular/core';

@Component({
  selector: 'a[appTextLink], span[appTextLink], p[appTextLink]',
  imports: [],
  templateUrl: './text-link.component.html',
  styleUrl: './text-link.component.css'
})
export class TextLinkComponent {
  changeFont = input<boolean>(true);
  private hostElement = inject<ElementRef<HTMLAnchorElement | HTMLSpanElement | HTMLParagraphElement>>(ElementRef);

  ngOnInit() {
    if(this.changeFont())
      this.hostElement.nativeElement.style.fontSize = '14px';
  }
}

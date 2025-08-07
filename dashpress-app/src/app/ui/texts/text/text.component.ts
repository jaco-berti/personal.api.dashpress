import { Component, ElementRef, inject, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-text, p[appText]',
  imports: [],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  text = input.required<string>();
  color = input<string>('white');
  margin = input<boolean>(true);
  private p = viewChild.required<ElementRef<HTMLParagraphElement>>('p');

  ngOnInit() {
    if(!this.margin())
      this.p().nativeElement.style.margin = '0';
  }
}

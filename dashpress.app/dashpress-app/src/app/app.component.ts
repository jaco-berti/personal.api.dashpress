import { Component } from '@angular/core';
import { AppService } from './app.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Flowbite
  ngOnInit(): void {
    initFlowbite();
  }

  constructor(private appService: AppService) {}

  get appName() { return this.appService.settings.appName; }
}

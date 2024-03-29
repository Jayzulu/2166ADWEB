import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_data_binding';
  clientName = "J Victorino Zulueta"; //Property
  appliedCSS = "green"; //Style
  notAppliedCSS = false;
  myColor = "violet";

  clickCount = 0
  clickMe () {
    this.clickCount++;
  }
  resetClickCount(){
    this.clickCount = 0;
  }
}

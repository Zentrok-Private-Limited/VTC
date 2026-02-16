import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'], 
})
export class App implements OnInit {

  protected readonly title = signal('superdry');
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2500);
  }
}

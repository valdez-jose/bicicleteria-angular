import { Component, signal } from '@angular/core';
import { Header } from "./components/header/header";
import { Cards } from './components/cards/cards';
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Header, Cards, Navbar], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bicicleteria-angular');
}

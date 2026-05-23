import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from "./components/header/header";
import { Cards } from './components/cards/cards';
import { BicisCards } from './components/bicis-cards/bicis-cards'; 
import {Locales } from './components/locales/locales';
import {Contacto} from './components/contacto/contacto';
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Header, Cards, BicisCards, Navbar, Locales, Contacto, Footer], 
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('bicicleteria-angular');
}

import { Component, signal } from '@angular/core';
import { Navebar } from "./_components/navebar/navebar";


@Component({
  selector: 'app-root',
  imports: [Navebar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = false;
}

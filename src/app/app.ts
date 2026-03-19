import { Component, signal } from '@angular/core';
import { Navebar } from "./_components/navebar/navebar";
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from './_components/secondary-button/secondary-button';
import { ItemCertificado } from './_components/item-certificado/item-certificado';
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificados } from './pages/certificados/certificados';


@Component({
  selector: 'app-root',
  imports: [Navebar, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('gerador-certificado');
  exibeNavbar: boolean = false;
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navebar',
  imports: [],
  templateUrl: './navebar.html',
  styleUrl: './navebar.scss',
})
export class Navebar implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }
  mensagem(){
        console.log('Meu comonete navebar inicializou');
  }
}

import { CarroService } from './carro.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RequestAPI';

  constructor(
    private carroservice: CarroService
  ) { }

  obterTodosCarros() {
    
  }
}

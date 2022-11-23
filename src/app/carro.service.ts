import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  obterTodos() {
   return this.httpClient.get(`${API_PATH}Carros`)
  }
}

//https://www.youtube.com/watch?v=6QXBTeVf0VY&t=204s

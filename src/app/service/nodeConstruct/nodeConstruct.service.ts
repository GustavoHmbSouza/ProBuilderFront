import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockNodeConstruct } from '../mock/mockNodeConstruct';
import { INodeConstruct } from '../../models/interfaces/INodeConstruct.interface';

@Injectable({
  providedIn: 'root'
})
export class ConstructService {

  private apiUrl = 'https://65b2b3099bfb12f6eafe4bc5.mockapi.io/api/v1'; // URL da sua API

  constructor(private http: HttpClient) {
  }

  // Método para buscar todos os usuários
  getActivity(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/nodeconstruct`);
  }

  getNodeConstruct(): Observable<INodeConstruct[]> {
    return of(mockNodeConstruct)
  }
}

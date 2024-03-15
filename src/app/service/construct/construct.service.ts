import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mockConstruct } from '../mock/mockConstruct';
import { IConstruct } from '../../models/interfaces/IConstruct.terface';

@Injectable({
  providedIn: 'root'
})
export class ConstructService {

  private apiUrl = 'https://65b2b3099bfb12f6eafe4bc5.mockapi.io/api/v1'; // URL da sua API

  constructor(private http: HttpClient) {
  }

  getConstruct(): Observable<IConstruct[]> {
    return of(mockConstruct)
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Cafe} from './cafe';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CafestoreService {

  private apiURL: string = environment.baseUrl;

constructor(private http: HttpClient) { }

getCafes (): Observable<Cafe[]> {
  return this.http.get<Cafe[]>(this.apiURL);

  }
}

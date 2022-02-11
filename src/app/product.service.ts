import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

import { CD } from './album';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<CD> {
    return this._http.get(this._albumUrl).map((response) => <CD>response.json())
  }

}
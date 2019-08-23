import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'minimatch';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:string="https://nodejsapidemo.herokuapp.com/users/"
  filter:string;

  constructor(private _http:HttpClient) { }
    getAllUsers() {
      return this._http.get(this.url);
    }

    }





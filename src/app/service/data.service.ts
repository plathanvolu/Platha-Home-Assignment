import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchKey: Subject<string> = new Subject<string>();

  constructor() { }
}

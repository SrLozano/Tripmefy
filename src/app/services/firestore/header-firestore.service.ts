import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HeaderFirestoreService {

  public arrayDelService = [];

  constructor() { }

  setArray(array: any) {
    this.arrayDelService = array;
  }
  
  getArray() {
    return this.arrayDelService;
  }
}

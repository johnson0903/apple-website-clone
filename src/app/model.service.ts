enum Category {
  Mac, Ipad, Iphone, Watch, Tv, Music
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor() { }
  getModels(category: Category) {
    
  }
}

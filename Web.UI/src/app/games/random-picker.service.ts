import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomPickerService {

  public getRandomItemFrom<T>(collection: T[]): T {
      return collection[Math.floor(Math.random() * collection.length)];
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppService {
  title = new BehaviorSubject('Welcome');

  setTitle(title: string) {
    this.title.next(title);
  }
}
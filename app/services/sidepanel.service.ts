import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidepanelService {
  states: Array<string> = [
    'collapse',
    'thin',
    'full'
  ];

  state = new BehaviorSubject<string>('thin');

  toggleState() {
    const index = this.states.indexOf(this.state.value);

    index === this.states.length - 1 ?
      this.state.next(this.states[0]) :
      this.state.next(this.states[index + 1]);
  }
}
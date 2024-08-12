import { Component } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { SidepanelService } from '../services/sidepanel.service';

@Component({
    selector: 'sidepanel',
    templateUrl: 'sidepanel.component.html',
    styleUrls: ['sidepanel.component.scss'],
    animations: [
        trigger(
            'slide', [
                state('collapse', style({
                    width: 0,
                    opacity: 0
                })),
                state('thin', style({
                    width: '100%',
                    opacity: 1
                })),
                state('full', style({
                    width: '100%',
                    opacity: 1
                })),
                transition('collapse => thin', animate('100ms ease-in')),
                transition('thin => full', animate('100ms ease-in')),
                transition('full => collapse', animate('100ms ease-out'))
            ]
        )
    ]
})
export class SidepanelComponent {
    state = 'thin';

    constructor(public sidepanel: SidepanelService) {
        sidepanel.state.subscribe(s => {
            this.state = s;
        });
    }
}

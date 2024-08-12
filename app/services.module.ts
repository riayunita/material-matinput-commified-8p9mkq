import { NgModule } from '@angular/core';

import { AppService } from './services/app.service';
import { SnackerService } from './services/snacker.service';
import { SidepanelService } from './services/sidepanel.service';
import { CoreApiService } from './services/core-api.service';

@NgModule({
  providers: [
    AppService,
    SnackerService,
    SidepanelService,
    CoreApiService
  ]
})
export class ServicesModule { }

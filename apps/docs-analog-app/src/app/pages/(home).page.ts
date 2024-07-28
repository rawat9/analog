import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'docs-analog-app-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <docs-analog-app-analog-welcome /> `,
})
export default class HomeComponent {}

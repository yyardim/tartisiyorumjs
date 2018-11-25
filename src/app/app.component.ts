import { Component, Inject } from '@angular/core';
import * as Redux from 'redux';

import { AppStore } from './app.store';
import { AppState } from './app.reducer';
import { InitData } from './core/init-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(@Inject(AppStore) private store: Redux.Store<AppState>) {
    InitData(store);
  }
  title = 'TartisiYorum.com is back on BlockChain!';
}

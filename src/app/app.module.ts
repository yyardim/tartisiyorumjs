import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatHeaderModule } from './header/mat-header/mat-header.module';
import { AppState, default as reducer } from './app.reducer';

import { AppComponent } from './app.component';
import { MatHeaderComponent } from './header/mat-header/mat-header.component';

import { AppStore, appStoreProviders } from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    MatHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatHeaderModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatHeaderModule } from './header/mat-header/mat-header.module';

import { AppComponent } from './app.component';
import { MatHeaderComponent } from './header/mat-header/mat-header.component';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

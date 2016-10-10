import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CTableComponent } from './components/c-table/c-table.component';
import { SimpleFormComponent } from './forms/simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CTableComponent, SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

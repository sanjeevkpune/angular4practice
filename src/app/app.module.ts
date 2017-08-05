import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // we need to import this module in order to recognize the ngModel directive
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // we need to import this module in order to recognize the ngModel directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

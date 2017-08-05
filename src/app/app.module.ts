import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'; // we need to import this module in order to recognize the ngModel directive
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // we need to import this module in order to recognize the ngModel directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

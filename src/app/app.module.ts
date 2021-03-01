import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'; 
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestPipePipe } from './my-component/test-pipe.pipe';
import { HighlightDirective } from './my-component/highlight.directive';

@NgModule({
  declarations: [ //All component / pipe / directive / will be part of declaration 
    AppComponent, MyComponentComponent, TestPipePipe, HighlightDirective
  ],
  imports: [ // all internal and external module wil be part of import  
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

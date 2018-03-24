import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCNO_AiixDMP36kwk5WSj8putcVx4ZWoGk",
  authDomain: "testeweb-c7fe7.firebaseapp.com",
  databaseURL: "https://testeweb-c7fe7.firebaseio.com",
  projectId: "testeweb-c7fe7",
  storageBucket: "testeweb-c7fe7.appspot.com",
  messagingSenderId: "713511661092"
};

@NgModule({
  declarations: [
    AppComponent
    
    
  ],
  imports: [
    BrowserModule,    
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

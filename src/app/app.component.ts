import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  nome:string;
  email:string;
  senha:string;
  urlImagem:string;

  constructor(public afAuth: AngularFireAuth){
    this.user= this.afAuth.authState;
  }

  loginFacebook(){
    this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
  }
 
  vinculaFacebook(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((res:any)=>{
      firebase.auth().currentUser.linkWithCredential(res.credential).then((user)=>{
        console.log('OK');
      },(erro)=>{
        console.log('ERRO');
      });
    }).catch((erro:any)=>{
      firebase.auth().currentUser.linkWithCredential(erro.credential).then((user)=>{
        console.log('OK');
      },(erro)=>{
        console.log('ERRO');
      });
    });
  }   
  
  loginEmail() {
    //console.log(this.email,this.senha);
    firebase.auth().signInWithEmailAndPassword(this.email,this.senha).catch((erro:any)=>{
      console.log(erro);
    });
  }

  vinculaEmail(){
    let credential = firebase.auth.EmailAuthProvider.credential(this.email,this.senha);
    firebase.auth().currentUser.linkWithCredential(credential).then((user)=>{
      console.log('OK');
    },(erro)=>{
      console.log(erro);
      console.log('ERRO');
    });
  }

  cadastroEmail() {
    //console.log(this.email, this.senha);
    firebase.auth().createUserWithEmailAndPassword(this.email,this.senha).then((res:any)=>{
      console.log(res);
      let usuario = firebase.auth().currentUser;
      usuario.updateProfile({
        displayName:this.nome,
        photoURL:this.urlImagem
      });

    }).catch((erro:any)=>{
      console.log(erro);
    });
  }

  sair(){
    this.afAuth.auth.signOut();
  }

}

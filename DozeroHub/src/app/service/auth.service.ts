import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', UserLogin)

  }

  cadastrar(User : User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar', User)

  }

  logado(){
    let logado = false
    if(environment.token != ""){
      logado = true
    }
    return logado
  }

  deslogado(){
    let deslogado = true
    if(environment.token != ""){
      deslogado = false
    }
    return deslogado
  }

}

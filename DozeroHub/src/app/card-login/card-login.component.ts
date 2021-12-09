import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-card-login',
  templateUrl: './card-login.component.html',
  styleUrls: ['./card-login.component.css']
})
export class CardLoginComponent implements OnInit {

  UserLogin: UserLogin = new UserLogin

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){

  window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.UserLogin).subscribe((resp: UserLogin)=>{
      this.UserLogin = resp

      environment.token = this.UserLogin.token
      environment.nome = this.UserLogin.nome
      environment.id = this.UserLogin.id
      environment.foto= this.UserLogin.foto

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 401){
        alert("Usuário ou senha estão incorretos.")
      }
      if(erro.status == 500){
        alert("Insira sua senha.")
      }
    })
  }


}

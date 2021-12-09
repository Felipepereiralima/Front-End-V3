import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  User: User = new User
  confirmarSenha: string
  tipoUsuario : string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)


  }

  confirmeSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  cadastrar(){
    this.User.tipo = this.tipoUsuario

    if(this.User.senha != this.confirmarSenha){
      alert("As senhas estão incorretas.")
    }else{
      this.authService.cadastrar(this.User).subscribe((resp: User )=>{
        this.User = resp
        this.router.navigate(["/entrar"])
        alert("Usuário cadastrado com sucesso!")
      })
    }
  }

}

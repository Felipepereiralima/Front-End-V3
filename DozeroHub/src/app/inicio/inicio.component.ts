import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
=======
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { PostagemService } from '../service/postagem.service';
>>>>>>> ee28803675464d275583862b994c456a6ff1bd22

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 nome = environment.nome
  constructor(
    private router: Router
  ) { }

<<<<<<< HEAD
  ngOnInit(){

    if(environment.token == ""){
      alert("Sua sessão expirou, faça o login novamente.")
      this.router.navigate(['/entrar'])
    }
=======
  postagem: Postagem = new Postagem()

  tema: Tema = new tema()
  listaTemas : Tema[]
  idTema : number

  usuario: usuario = new usuario()
  idUsuario = environment.id


  constructor(
    private postegemService: PostagemService

    private temaService: TemaService //da erro por que ainda não tem tema.

  ) { }

  


  ngOnInit(): void {


    this.getAllTemas()

>>>>>>> ee28803675464d275583862b994c456a6ff1bd22
  }



  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: tema[]) =>{
      this.listaTemas = 
    } )
  }


  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: tema)=>{
      this.tema = resp
    })
  }


  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postegemService.postPostagem(this.postagem).subscribe((resp: Postagem) =>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()

    })
  }


}

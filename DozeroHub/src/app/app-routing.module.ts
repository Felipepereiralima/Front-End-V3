import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CardLoginComponent } from './card-login/card-login.component';
import { ContatoComponent } from './contato/contato.component';
import { GenerationComponent } from './generation/generation.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [

  {path: "", redirectTo: "entrar", pathMatch: "full"},
  {path: "entrar", component:CardLoginComponent},
  {path: "cadastrar", component:CadastrarComponent},
  {path: "ajuda", component:AjudaComponent},
  {path: "generation", component:GenerationComponent},
  {path: "quem-somos", component:QuemSomosComponent},
  {path:'contato', component:ContatoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

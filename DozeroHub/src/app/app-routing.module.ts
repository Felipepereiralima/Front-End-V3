import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { CardLoginComponent } from './card-login/card-login.component';
import { ContatoComponent } from './contato/contato.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { GenerationComponent } from './generation/generation.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [

  {path: "", redirectTo: "entrar", pathMatch: "full"},
  {path: "entrar", component:CardLoginComponent},
  {path: "cadastrar", component:CadastrarComponent},
  {path: "generation", component:GenerationComponent},
  {path: "quem-somos", component:QuemSomosComponent},
  {path:'contato', component:ContatoComponent},
  {path:'home', component:HomeComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'user-edit/:id', component:UserEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

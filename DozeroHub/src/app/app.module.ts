import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CardLoginComponent } from './card-login/card-login.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { ContatoComponent } from './contato/contato.component';
import { GenerationComponent } from './generation/generation.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
<<<<<<< HEAD
import { MenuLogadoComponent } from './menu-logado/menu-logado.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
=======
import { UserEditComponent } from './edit/user-edit/user-edit.component';
>>>>>>> ee28803675464d275583862b994c456a6ff1bd22



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CardLoginComponent,
    QuemSomosComponent,
    ContatoComponent,
    GenerationComponent,
    CadastrarComponent,
    HomeComponent,
    InicioComponent,
<<<<<<< HEAD
    MenuLogadoComponent

=======
    UserEditComponent
>>>>>>> ee28803675464d275583862b994c456a6ff1bd22

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

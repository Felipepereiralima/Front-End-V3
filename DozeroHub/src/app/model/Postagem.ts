
import { tema } from './tema';
import { User } from './User';
//inserir data ?

export class Postagem{
  public id: number
  public titulo: string
  public texto: string
  public curtida: number
  public imagem: string
  public usuario: User
  public tema: tema
}

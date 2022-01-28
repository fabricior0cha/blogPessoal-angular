import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(
    private http: HttpClient
  ) { }

    token = { headers: new HttpHeaders().set('Authorization', environment.token)} 

    getAllPostagem(): Observable<Postagem[]> {
      return this.http.get<Postagem[]>('https://blogpessoalapp.herokuapp.com/postagens', this.token)
    }
    
    getById(id: number): Observable<Postagem>{
      return this.http.get<Postagem>(`https://blogpessoalapp.herokuapp.com/postagens/${id}`, this.token)
    }

    postPostagem(postagem: Postagem): Observable<Postagem>{
      return this.http.post<Postagem>('https://blogpessoalapp.herokuapp.com/postagens/salvar', postagem, this.token)
    }

    putPostagem(postagem: Postagem): Observable<Postagem>{
      return this.http.put<Postagem>('https://blogpessoalapp.herokuapp.com/postagens/alterar', postagem, this.token)
    }

    deletePostagem(id: number){
      return this.http.delete(`https://blogpessoalapp.herokuapp.com/postagens/${id}`, this.token)

    }



}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginMethod = `${environment.loginUrl}/api/Autenticacion/Validar`;

  constructor(private httpClient:HttpClient) {}
  Login(){
    return this.httpClient.post(this.loginMethod,{
      "id":1,
      "nombre": "mateo",
      "contrasenia": "123"
    })
  }
}

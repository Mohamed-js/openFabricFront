import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  signUp(body: any){
    return this.http.post(`http://127.0.0.1:3000/registrations/`,
      body, {
      headers: {
        "Content-Type": "application/json",
      }
    }
   );
  }

  login(body: any){
    return this.http.post(`http://127.0.0.1:3000/sessions/`,
      body, {
      headers: {
        "Content-Type": "application/json",
      }
    }
   );
  }

  saveToken(token: string){
    localStorage.setItem("openFabricToken", token)
  }
}

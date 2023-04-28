import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get('http://127.0.0.1:3000/products/',{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });
  }

  getProduct(id: String) {
    return this.http.get(`http://127.0.0.1:3000/products/${id}`,{
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });
  }

  createProduct(val:any){
    return this.http.post(`http://127.0.0.1:3000/products/`,
      val, {
      headers: {
        "Accept": "application/json",
      }
    }
   );
  }

  updateProduct(body: any, id: string){
    return this.http.patch(`http://127.0.0.1:3000/products/${id}`,
      body, {
      headers: {
        "Content-Type": "application/json",
      }
    }
   );
  }
}

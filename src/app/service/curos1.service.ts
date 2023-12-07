import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Curos1Service {

  private apiUrl = 'http://localhost:8002/cursos'; // Reemplaza esta URL con la URL de tu API

  private apiUrl1 = 'http://localhost:8001/usuarios'; // Reemplaza esta URL con la URL de tu API

  private apiUrl2 = 'http://localhost:8003/autent-autoriz/login';

  constructor(private http: HttpClient) { }

  addCurso(nombre: string, nombre_instructor: string, descripcion: string, costo: number) {
    const curso = { nombre, nombre_instructor, descripcion, costo };
    console.log("jajaja");
    return this.http.post(this.apiUrl, curso);

  }

  addAlumno(nombre:string,correo:string,password:string){
    const alumno = {nombre,correo,password};
    return this.http.post(this.apiUrl1,alumno);




  }

  getlogin(email:string,password:string){
    const login ={email,password};
    return this.http.post(this.apiUrl2,login);

  }
}

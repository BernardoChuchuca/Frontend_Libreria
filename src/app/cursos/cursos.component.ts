import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

import { Curos1Service } from '../service/curos1.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: any;
  nombre: string ='';
  correo: string='';
  password: string='root';


  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal,private cursoService: Curos1Service) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8002/cursos').subscribe((response) =>{
      this.cursos = response;
      console.log(response);
    });
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  addAlumno() {
    this.cursoService.addAlumno(this.nombre, this.correo,this.password)
      .subscribe(
        (data) => Swal.fire(
          'Good job!',
          'Registro Exitoso!',
          'success',
        ), // En caso de éxito
        (error) => console.log(error) // En caso de error
      );


  }

}

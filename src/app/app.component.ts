import { Component } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { Curos1Service } from './service/curos1.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Microservicio-Cursos';
  nombre: string ='';
  nombre_instructor: string='';
  descripcion: string='';
  costo: number=0;
  cont:number=0;

  constructor(private http: HttpClient, config: NgbModalConfig, private modalService: NgbModal,
    private cursoService: Curos1Service,private router:Router) {
      let params=this.router.getCurrentNavigation()?.extras.queryParams
     }

  openModal(content: any) {
    this.modalService.open(content);
  }

  addCurso() {
    if(this.cont==0){
      this.cursoService.addCurso(this.nombre, this.nombre_instructor, this.descripcion, this.costo)
      .subscribe(data=> Swal.fire(
        'Good job!',
        'Registro Exitoso!',
        'success',
      ))
      this.cont++;

      this.modalService.dismissAll();
      //this.router.navigate(['/cursos'])



    }




  }

  listar(){


}


}

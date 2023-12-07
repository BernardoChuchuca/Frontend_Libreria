import { Component, OnInit } from '@angular/core';
import { NgbModal,NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Curos1Service } from '../service/curos1.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string='';
  password: string='';

  constructor(config: NgbModalConfig, private modalService: NgbModal,private cursoService: Curos1Service,private router:Router) {
    let params=this.router.getCurrentNavigation()?.extras.queryParams
  }

  ngOnInit(): void {
  }

  openModal(content: any) {
    this.modalService.open(content);
  }

  gettlogin1(){
    this.cursoService.getlogin(this.email,this.password)
    .subscribe(data=> Swal.fire(

      'Login Exitoso!',
      'success',



    ),


   ),Swal.fire(

      'Login fallido!',

    )



  }

  gettlogin(){
    this.cursoService.getlogin(this.email,this.password)
    .subscribe(data=> {

      this.router.navigate(['/cursos'])

    })





  }


}



import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/acerca-de.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public usuario : Usuario | undefined;
  public editUsuario: Usuario | undefined;
  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
    this.getUser();
  
  }
  public getUser():void{
    this.headerService.getUser().subscribe({
      next: (Response : Usuario) =>{
        this.usuario=Response;
      },
      error: (error:HttpErrorResponse) =>{
        alert( error.message);
      }
    })
  }
}

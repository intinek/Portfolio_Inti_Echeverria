import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

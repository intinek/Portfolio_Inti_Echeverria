import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/models/educacion';
import { EducationService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducationComponent implements OnInit {
  public educations:Education[]=[];
  constructor(private educationService:EducationService) { }

  ngOnInit(): void {
    this.getEducations();
  }

  public getEducations():void{
    this.educationService.getEducation().subscribe({
      next:(Response: Education[]) =>{
        this.educations=Response;
      },
      error:(error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }
}

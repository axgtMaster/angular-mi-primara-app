import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  nombre: string = 'Marcela'
  apellido: string = 'Vergara'
  edad: number = 38
  /*private edad: number = 37

  getEdad():number{
    return this.edad;
  }*/

}

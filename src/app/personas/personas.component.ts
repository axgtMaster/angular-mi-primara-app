import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    //template: `<h1>Listado de Personas</h1>
    //        <app-persona></app-persona>
    //        <app-persona></app-persona>`
    styleUrls:['./personas.component.css']
   /*  styles: [`
        h1{
            color: blue;
        }
    `] */
})
export class PersonasComponent{
    //Property Binding in Angular
    deshabilitar = false;
    mensaje = '';
    titulo ='Profesor';
    mostrar = false;

    agregarPersona(){
        this.mostrar = true;
        this.mensaje = 'Persona Agregada';
    }

    /*modificarTitulo(event: Event){
        console.log('Entrando a metodo modificar titulo')
       this.titulo = (<HTMLInputElement>event.target).value;
    }*/
}
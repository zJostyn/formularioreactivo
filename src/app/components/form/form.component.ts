import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  persona:Persona = {
    cedula: "",
    nombre: "",
    fecha: "",
    ciudad: ""
  };
  
  constructor() {}

  submit() {
    (function () {
      'use strict'
    
      var forms = document.querySelectorAll('.needs-validation')
    
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event:any) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()



    alert (
      "Datos Enviados Correctamente!\n\n" +
      "Informacion:" + "\n" + 
      this.persona.cedula + "\n" + 
      this.persona.nombre + "\n" + 
      this.persona.fecha + "\n" + 
      this.persona.ciudad
    );
  }
  

}

interface Persona {
  cedula: string;
  nombre: string;
  fecha: string;
  ciudad: string;
}

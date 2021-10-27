import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomeService} from "../../services/home.service";
import {Router} from "@angular/router";
import {ContactForm} from "../../model/contact-form";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private homeSrv: HomeService,
              private router: Router) {
  }

  // Datos del servicio
  public listaDeDatos: Array<any> = [];

  // Declaro el formulario y sus validaciones
  formularioContacto = this.fb.group(
    { // Configuración de los controles
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      form_cemail: ['', Validators.compose([Validators.email, Validators.required])],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    },
    { // Otras opciones del formulario
      validators: this.validadorPasswords
    });


  asincroniaCallback = (list: any, callback: any) => {
    if (list instanceof Array && list.length > 0) {
      const suma = list.map(valor => Math.pow(valor, 2));
      return callback(null, suma);
    } else {
      const error = new Error('Error de ejecucion');
      return callback(error, null);
    }
  }

  asincroniaPromesa = (list: any) => {
    return new Promise((resolve, reject) => {
      if (list instanceof Array && list.length > 0) {
        const suma = list.map(valor => Math.pow(valor, 2));
        return resolve(suma);
      } else {
        const error = new Error('Error de ejecucion');
        return reject(error);
      }
    });
  }

  ngOnInit(): void {
    console.log('asincroniaCallback....')
    this.asincroniaCallback([2, 3, 4, 5], (error: any, result: any) => console.log((error) ? error : result));
    console.log('(END) asincroniaCallback....');

    console.log('');
    console.log('');
    console.log('');

    console.log('asincroniaPromesa....');
    this.asincroniaPromesa([2, 3, 4, 5]).then(r => console.log(r)).catch(e => console.error(e));
    console.log('(FIN)asincroniaPromesa....');
  }

  enviarFormulario(): void {
    console.log('Enviando formulario...');

    // Convierto a objeto.
    let value: ContactForm = new ContactForm(
      this.formularioContacto.value.nombre,
      this.formularioContacto.value.apellido,
      this.formularioContacto.value.email,
      this.formularioContacto.value.asunto,
      this.formularioContacto.value.mensaje);

    // Envio el mensaje
    console.log('Enviando ' + JSON.stringify(value));

    // Redirigo al login
    this.router.navigate(['/login']);
  }

  /**
   * Función que valida el formulario (se añade cuando se crea el grupo)
   * @param frm Formulario
   */
  validadorPasswords(frm: FormGroup) {
    let emailInicial = frm?.get('email')?.value;
    let segundoEmail = frm?.get('form_cemail')?.value;
    let esValido = emailInicial === segundoEmail;

    let coincidenMails = esValido ? null : {'invalid': true};
    return coincidenMails;
  }

}

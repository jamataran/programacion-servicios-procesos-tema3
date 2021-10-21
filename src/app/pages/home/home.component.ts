import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {ContactForm} from "../../model/contact-form";
import {HomeServiceService} from "../../services/home-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private homeSrv: HomeServiceService,
              private router: Router) {
  }

  // Declaro el formulario y sus validaciones
  formularioContacto = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    email: ['',  Validators.compose([Validators.email, Validators.required])],
    asunto: ['', Validators.required],
    mensaje: ['', Validators.required]
  });

  ngOnInit(): void {
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
    this.homeSrv.enviarMensaje(value);

    // Redirigo al login
    this.router.navigate(['/login']);
  }

}

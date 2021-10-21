import {Injectable} from '@angular/core';
import {ContactForm} from "../model/contact-form";

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {

  constructor() {
  }

  enviarMensaje(contacto: ContactForm): void {
    console.log('***************************************************************')
    console.log('Enviando mensaje.... 🧪')
    console.log(JSON.stringify(contacto));
    console.log('🎉🎉 Mensaje enviado')
    console.log('***************************************************************')
  }

}

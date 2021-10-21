import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {PruebaService} from "../../services/prueba.service";

@Component({
  selector: 'app-login', // Nombre por el que referenciamos nuestro componente
  templateUrl: './login.component.html', // Plantilla
  styleUrls: ['./login.component.css'], // Ficheros estilo
  providers: [] // Otros componentes.
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  public title: String;
  public mailIn: String;
  public user: string;
  public password: String;
  public titleLogin: boolean;
  public mailValido: boolean;
  public passValid: boolean;
  public ejemplosPassBad: Array<String>;

  // Ejemplos pipes
  public dataCurrency: number = 456.23;
  public dataDate: Date = new Date(2021, 10, 11);
  public dataJson = {id: 1, nombre: "jose", datos: {"edad": 12, sexo: "V"}};
  public dataString: string = "Buenos días desde login.component.ts";
  public dataPercent: number = 92;
  public dataSlice: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  public users: Array<any> = [] ;


  constructor(private pruebaService: PruebaService) {
    this.title = 'Login CEV';
    this.titleLogin = false;
    this.mailValido = true;
    this.mailIn = '';
    this.user = '';
    this.password = '';
    this.passValid = true;
    this.ejemplosPassBad = ["C0ntr4s3ñ4", "P4ssw0rd", "1234", "admin"]
  }

  ngOnInit(): void {
    console.log('ngOnInit() invocado');
    this.users = this.pruebaService.getUsers();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() invocado');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() invocado');
  }

  /**
   * Simula en el envio de login
   */
  envioLogin(): void {
    console.log('Usuario: ' + this.user);
    console.log('Contraseña: ' + this.password);
    this.titleLogin = !this.titleLogin;
    this.validarMail(this.user);
    this.validarPassword();
  }

  validarMail(mail: string): void {
    console.log('Validando mail desde ' + mail);
    this.mailIn = mail;
    this.mailValido = this.isEmail(mail);
  }

  validarPassword(): void {
    this.passValid = this.password.length >= 6;
  }

  isEmail(search: string): boolean {
    var serchfind: boolean = false;
    const REGEXP = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    serchfind = REGEXP.test(search);
    console.log(serchfind)

    return serchfind
  }


}

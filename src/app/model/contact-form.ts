export class ContactForm{

  private _nombre: string;

  private _apellido: string;

  private _email: string;

  private _asunto: string;

  private _mensaje: string;

  constructor(nombre: string, apellido: string, email: string, asunto: string, mensaje: string) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._email = email;
    this._asunto = asunto;
    this._mensaje = mensaje;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get apellido(): string {
    return this._apellido;
  }

  set apellido(value: string) {
    this._apellido = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get asunto(): string {
    return this._asunto;
  }

  set asunto(value: string) {
    this._asunto = value;
  }

  get mensaje(): string {
    return this._mensaje;
  }

  set mensaje(value: string) {
    this._mensaje = value;
  }

}

import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Photos} from "../model/photos";
import {Endpoints} from "../constants/endpoints";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  public listaDeDatos: Array<any> = [];
  private listaDatos$ = new Subject<Array<any>>(); // Informa de eventos

  constructor(private http: HttpClient) {
  }

  /**
   * getPhotos()
   * Método que obtiene la fotos. Es un observable, pues no tiene los datos, llegarán, pero aún no están.
   * En el video no lo hace tipado, yo he creado el Objeto Photos, para que sea más sencillo trabajar con él.
   */
  getPhotos(): Observable<Array<Photos>> {
    return this.http.get<Array<Photos>>(Endpoints.PHOTOS);
  }


}

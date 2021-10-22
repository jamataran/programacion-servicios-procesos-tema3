import {Component, OnInit} from '@angular/core';
import {HomeService} from "../../services/home.service";
import {Photos} from "../../model/photos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeSrv: HomeService) {
  }

  photos: Array<Photos> = [];

  ngOnInit(): void {
    // Obtengo las fotos del Servicio
    console.log('Obteniendo fotos');
    this.homeSrv.getPhotos().subscribe(response => this.photos.push(...response), error => console.error(error));
  }

}

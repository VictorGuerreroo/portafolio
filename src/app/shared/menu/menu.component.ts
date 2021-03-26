import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    { ruta: '/inicio', texto: 'Inicio'},
    { ruta: '/sobremi', texto: 'Sobre mí'},
    { ruta: '/portafolio1', texto: 'Portafolio'},
    //{ ruta: '/curriculum', texto: 'Curriculum'},
//{ ruta: '/contacto', texto: 'Contacto'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

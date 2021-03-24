import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../../interfaces/interfaces';

@Component({
  selector: 'app-paginacion',
  templateUrl: './paginacion.component.html',
  styleUrls: ['./paginacion.component.css']
})
export class PaginacionComponent implements OnInit {

  menuItem: MenuItem[]= [
    {
      ruta: "/portafolio1",
      texto: ""
    },
    {
      ruta: "/portafolio2",
      texto: ""
    },
    {
      ruta: "/portafolio3",
      texto: ""
    },
    {
      ruta: "/portafolio4",
      texto: ""
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

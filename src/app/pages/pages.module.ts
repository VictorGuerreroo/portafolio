import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { InicioComponent } from './inicio/inicio.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { Portafolio1Component } from './portafolio/portafolio1/portafolio1.component';
import { Portafolio2Component } from './portafolio/portafolio2/portafolio2.component';
import { Portafolio3Component } from './portafolio/portafolio3/portafolio3.component';
import { Portafolio4Component } from './portafolio/portafolio4/portafolio4.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [SobreMiComponent, InicioComponent, CurriculumComponent, Portafolio1Component, Portafolio2Component, Portafolio3Component, Portafolio4Component, ContactoComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { Portafolio1Component } from './portafolio/portafolio1/portafolio1.component';
import { Portafolio2Component } from './portafolio/portafolio2/portafolio2.component';
import { Portafolio3Component } from './portafolio/portafolio3/portafolio3.component';
import { Portafolio4Component } from './portafolio/portafolio4/portafolio4.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'sobremi', component: SobreMiComponent },
      { path: 'portafolio1', component: Portafolio1Component },
      { path: 'portafolio2', component: Portafolio2Component },
      { path: 'portafolio3', component: Portafolio3Component },
      { path: 'portafolio4', component: Portafolio4Component },
      { path: 'curriculum', component: CurriculumComponent },
      { path: 'contacto', component: ContactoComponent },
      { path: '**', redirectTo: 'inicio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

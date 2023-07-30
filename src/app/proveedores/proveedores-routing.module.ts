import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'agregar',
        component:AgregarComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      },
      {
        path: 'editar/:id',
        component:AgregarComponent
      },
      {
        path: ':id',
        component: ProveedorComponent
      },
    ]
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }

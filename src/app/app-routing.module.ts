import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerInicioComponent } from './Components/banner-inicio/banner-inicio.component';
import { AcercaDeMiComponent } from './Components/acerca-de-mi/acerca-de-mi.component';

const routes: Routes = [
  { path: '', redirectTo: '/bannerInicio', pathMatch: 'full'}, // Redireccionar a 'inicio' al cargar la página
  { path: 'bannerInicio', component: BannerInicioComponent }, // Ruta '/inicio' cargará el componente 'InicioComponent'
  { path: 'AcercaDeMi', component: AcercaDeMiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

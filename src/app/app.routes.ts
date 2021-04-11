import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { GraficaTemperaturaComponent } from './components/graficas/grafica-temperatura/grafica-temperatura.component';
import { GraficaHumedadComponent } from './components/graficas/grafica-humedad/grafica-humedad.component';
import { GraficaCalidadComponent } from './components/graficas/grafica-calidad/grafica-calidad.component';
import { GraficaLuminosidadComponent } from './components/graficas/grafica-luminosidad/grafica-luminosidad.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/home/administration/register/register.component';
import { TableClientsComponent } from './components/home/table-clients/table-clients.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { AddDataComponent } from './components/home/add-data/add-data.component';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { MyProjectsComponent } from './components/home/my-projects/my-projects.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    {
      path: 'projects',
      component: ProjectsComponent,
      canActivate: [guard], 
      data: { expectedRol: ['admin', 'user'] }
    },
    {
      path: 'my-projects',
      component: MyProjectsComponent,
      canActivate: [guard], 
      data: { expectedRol: ['admin', 'user'] }
    },
    {
      path: 'register',
      component: RegisterComponent,
      canActivate: [guard],
      data: { expectedRol: ['admin'] }
    }
  ]},
  { path: 'graficaLuminosidad/:id', component: GraficaLuminosidadComponent },
  { path: 'graficaTemperatura/:id', component: GraficaTemperaturaComponent },
  { path: 'graficaHumedad/:id', component: GraficaHumedadComponent },
  { path: 'graficaCalidad/:id', component: GraficaCalidadComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

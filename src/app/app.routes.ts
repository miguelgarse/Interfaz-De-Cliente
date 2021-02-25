import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { AboutComponent } from './components/about/about.component';
import { GraficaTemperaturaComponent } from './components/graficas/grafica-temperatura/grafica-temperatura.component';
import { GraficaHumedadComponent } from './components/graficas/grafica-humedad/grafica-humedad.component';
import { GraficaCalidadComponent } from './components/graficas/grafica-calidad/grafica-calidad.component';
import { GraficaLuminosidadComponent } from './components/graficas/grafica-luminosidad/grafica-luminosidad.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/administration/register/register.component';
import { TableClientsComponent } from './components/table-clients/table-clients.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, children: [
    {
      path: 'register',
      component: RegisterComponent
    }, {
      path: 'table-clients',
      component: TableClientsComponent
    }
  ]},
  { path: 'graficaLuminosidad/:id', component: GraficaLuminosidadComponent },
  { path: 'graficaTemperatura/:id', component: GraficaTemperaturaComponent },
  { path: 'graficaHumedad/:id', component: GraficaHumedadComponent },
  { path: 'graficaCalidad/:id', component: GraficaCalidadComponent },
  { path: 'comparador', component: ComparadorComponent },
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

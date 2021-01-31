import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { AboutComponent } from './components/about/about.component';
import { GraficaTemperaturaComponent } from './components/grafica-temperatura/grafica-temperatura.component';
import { GraficaHumedadComponent } from './components/grafica-humedad/grafica-humedad.component';
import { GraficaCalidadComponent } from './components/grafica-calidad/grafica-calidad.component';
import { GraficaLuminosidadComponent } from './components/grafica-luminosidad/grafica-luminosidad.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'graficaLuminosidad/:id', component: GraficaLuminosidadComponent },
  { path: 'graficaTemperatura/:id', component: GraficaTemperaturaComponent },
  { path: 'graficaHumedad/:id', component: GraficaHumedadComponent },
  { path: 'graficaCalidad/:id', component: GraficaCalidadComponent },
  { path: 'comparador', component: ComparadorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'sitemap', component: SitemapComponent },
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

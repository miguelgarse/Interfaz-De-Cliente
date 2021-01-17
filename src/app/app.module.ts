import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { UploadService } from './services/upload.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { AboutComponent } from './components/about/about.component';
import { GraficaTemperaturaComponent } from './components/grafica-temperatura/grafica-temperatura.component';
import { GraficaHumedadComponent } from './components/grafica-humedad/grafica-humedad.component';
import { GraficaCalidadComponent } from './components/grafica-calidad/grafica-calidad.component';
import { GraficaLuminosidadComponent } from './components/grafica-luminosidad/grafica-luminosidad.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ComparadorComponent,
    AboutComponent,
    GraficaTemperaturaComponent,
    GraficaCalidadComponent,
    GraficaHumedadComponent,
    GraficaLuminosidadComponent,
    SitemapComponent,
    LandingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    ChartsModule
  ],
  providers: [
    UploadService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

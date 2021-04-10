import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { UploadService } from './services/upload.service';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { AboutComponent } from './components/about/about.component';
import { GraficaTemperaturaComponent } from './components/graficas/grafica-temperatura/grafica-temperatura.component';
import { GraficaHumedadComponent } from './components/graficas/grafica-humedad/grafica-humedad.component';
import { GraficaCalidadComponent } from './components/graficas/grafica-calidad/grafica-calidad.component';
import { GraficaLuminosidadComponent } from './components/graficas/grafica-luminosidad/grafica-luminosidad.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { RegisterComponent } from './components/home/administration/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { TableClientsComponent } from './components/home/table-clients/table-clients.component';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { AddDataComponent } from './components/home/add-data/add-data.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { ProjectsComponent } from './components/home/projects/projects.component';

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
    LoginComponent,
    RegisterComponent,
    TableClientsComponent,
    AddDataComponent,
    PrincipalComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule,
    ChartsModule,
    ZXingScannerModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    })
  ],
  providers: [
    UploadService,
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { UploadService } from './services/upload.service';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { RegisterComponent } from './components/home/administration/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptors/prod-interceptor.service';
import { AddDataComponent } from './components/home/add-data/add-data.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { PrincipalComponent } from './components/home/principal/principal.component';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { MyProjectsComponent } from './components/home/my-projects/my-projects.component';
import { NewProjectDialogComponent } from './components/home/projects/new-project-dialog/new-project-dialog.component';
import { FormProjectComponent } from './components/home/projects/form-project/form-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutComponent,
    SitemapComponent,
    LoginComponent,
    RegisterComponent,
    AddDataComponent,
    PrincipalComponent,
    ProjectsComponent,
    MyProjectsComponent,
    NewProjectDialogComponent,
    FormProjectComponent
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

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RegisterComponent } from './components/home/administration/register/register.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { ProjectsComponent } from './components/home/projects/projects.component';
import { MyProjectsComponent } from './components/home/my-projects/my-projects.component';
import { FormProjectComponent } from './components/home/projects/form-project/form-project.component';

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
      path: 'form-project',
      component: FormProjectComponent,
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

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuotePageComponent } from '././components/pages/add-quote-page/add-quote-page.component';
import { HomeComponent } from '././components/pages/home/home.component';
import { UpdateQuotePageComponent } from './components/pages/update-quote-page/update-quote-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuotePageComponent } from './components/pages/quote-page/quote-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'quote/add',
    component: AddQuotePageComponent
  },
  {
    path:'quote/:quoteId',
    component: QuotePageComponent
  },
  {
    path:'quote/update/:quoteId',
    component:UpdateQuotePageComponent
  },
  {
    path:'register',
    component:RegisterPageComponent
  },
  {
    path:'login',
    component:LoginPageComponent
  },
  
  {
    path: '**',
    component: NotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }

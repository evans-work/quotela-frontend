import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from '././components/quote/quote.component';
import { LikesComponent } from '././components/likes/likes.component';
import { UserComponent } from '././components/user/user.component';
import { QuoteBlockComponent } from '././components/quote-block/quote-block.component';
import { NavbarComponent } from '././components/navbar/navbar.component';
import { ShareComponent } from '././components/share/share.component';
import { FooterComponent } from '././components/footer/footer.component';
import { AddQuoteBtnComponent } from '././components/add-quote-btn/add-quote-btn.component';
import { AddQuotePageComponent } from '././components/pages/add-quote-page/add-quote-page.component';
import { HomeComponent } from '././components/pages/home/home.component';
import { NotFoundComponent } from '././components/not-found/not-found.component';
import { QuotesService } from './services/quotes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateQuotePageComponent } from './components/pages/update-quote-page/update-quote-page.component';
import { QuotePageComponent } from './components/pages/quote-page/quote-page.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteOptionsComponent } from './components/quote-options/quote-options.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginBtnComponent } from './components/login-btn/login-btn.component';
import { RegisterBtnComponent } from './components/register-btn/register-btn.component';
import { UsersService } from './services/users.service';
import { SuccessComponent } from './components/success/success.component';
import { ErrorComponent } from './components/error/error.component';
import { MessageComponent } from './components/message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    LikesComponent,
    UserComponent,
    QuoteBlockComponent,
    NavbarComponent,
    ShareComponent,
    AddQuoteBtnComponent,
    FooterComponent,
    AddQuotePageComponent,
    HomeComponent,
    NotFoundComponent,
    UpdateQuotePageComponent,
    QuotePageComponent,
    QuoteFormComponent,
    QuoteOptionsComponent,
    RegisterFormComponent,
    RegisterPageComponent,
    LoginPageComponent,
    LoginFormComponent,
    LogoutComponent,
    LoginBtnComponent,
    RegisterBtnComponent,
    SuccessComponent,
    ErrorComponent,
    MessageComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  
  providers: [
    QuotesService,
    AuthService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

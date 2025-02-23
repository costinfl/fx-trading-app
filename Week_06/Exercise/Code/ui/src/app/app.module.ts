import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

import {JwtInterceptor} from 'src/app/helpers/jwt.interceptor';
import {ErrorInterceptor} from 'src/app/helpers/error.interceptor';
import {UserService} from 'src/app/services/user.service';
import {AuthenticationService} from 'src/app/services/authentication.service';
import {AuthGuard} from 'src/app/guards/auth.guard';
import {TradeService} from 'src/app/services/trade.service';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {NotFoundPageComponent} from './pages/not-found-page/not-found-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {BlotterViewComponent} from './pages/dashboard-page/blotter-view/blotter-view.component';
import {FxRatesViewComponent} from './pages/dashboard-page/fx-rates-view/fx-rates-view.component';
import {WidgetComponent} from './pages/dashboard-page/widget/widget.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    RegisterPageComponent,
    BlotterViewComponent,
    FxRatesViewComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    AuthGuard,
    TradeService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './home/register/register.component';
import { LoginComponent } from './home/login/login.component';
import { RegistrarLibroComponent } from './admin/registrar-libro/registrar-libro.component';
import { ListLibroComponent } from './admin/list-libro/list-libro.component';
import { UpdateLibroComponent } from './admin/update-libro/update-libro.component';
import { RegistrarUserComponent } from './admin/registrar-user/registrar-user.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { RegistrarProveeComponent } from './admin/registrar-provee/registrar-provee.component';
import { ListProveeComponent } from './admin/list-provee/list-provee.component';
import { UpdateProveeComponent } from './admin/update-provee/update-provee.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { RegistrarRoleComponent } from './admin/registrar-role/registrar-role.component';

import { BoardService } from './services/board.service';
import { RoleService } from './services/role.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { UserService } from './services/user.service';

import { AuthGuard } from './guard/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    RegistrarLibroComponent,
    ListLibroComponent,
    UpdateLibroComponent,
    RegistrarUserComponent,
    ListUserComponent,
    UpdateUserComponent,
    ListRoleComponent,
    RegistrarProveeComponent,
    ListProveeComponent,
    UpdateProveeComponent,
    UpdateRoleComponent,
    RegistrarRoleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    BoardService,
    RoleService,
    TokenInterceptorService,
    UserService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

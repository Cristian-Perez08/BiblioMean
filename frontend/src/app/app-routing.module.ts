import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProveeComponent } from './admin/list-provee/list-provee.component';
import { ListRoleComponent } from './admin/list-role/list-role.component';
import { ListUserComponent } from './admin/list-user/list-user.component';
import { RegistrarLibroComponent } from './admin/registrar-libro/registrar-libro.component';
import { RegistrarProveeComponent } from './admin/registrar-provee/registrar-provee.component';
import { RegistrarRoleComponent } from './admin/registrar-role/registrar-role.component';
import { RegistrarUserComponent } from './admin/registrar-user/registrar-user.component';
import { UpdateLibroComponent } from './admin/update-libro/update-libro.component';
import { UpdateProveeComponent } from './admin/update-provee/update-provee.component';
import { UpdateRoleComponent } from './admin/update-role/update-role.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { ListLibroComponent } from './board/list-libro/list-libro.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent
  },
  {
  path: 'listLibro',
  component: ListLibroComponent
  },
  {
  path: 'listProvee',
  component: ListProveeComponent
  },
  {
  path: 'listRole',
  component: ListRoleComponent
  },
  {
  path: 'listUser',
  component: ListUserComponent
  },
  {
  path: 'registrarLibro',
  component: RegistrarLibroComponent
  },
  {
  path: 'registrarProvee',
  component: RegistrarProveeComponent
  },
  {
  path: 'registratRole',
  component: RegistrarRoleComponent
  },
  {
  path: 'registrarUser',
  component: RegistrarUserComponent
  },
  {
  path: 'updateLibro',
  component: UpdateLibroComponent
  },
  {
  path: 'updateProvee',
  component: UpdateProveeComponent
  },
  {
  path: 'updateRole',
  component: UpdateRoleComponent
  },
  {
  path: 'UpdateUser',
  component: UpdateUserComponent
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'registrar',
  component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

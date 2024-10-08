import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {isAuthenticatedGuard} from "./auth/guards/is-authenticated.guard";
import {isNotAuthenticatedGuard} from "./auth/guards/is-not-authenticated.guard";

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [isNotAuthenticatedGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'users',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./users-management/users-management.module').then(m => m.UsersManagementModule)
  },
  {
    path: 'roles',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./roles-management/roles-management.module').then(m => m.RolesManagementModule)
  },
  {
    path: 'categories',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./categories-management/categories-management.module').then(m => m.CategoriesManagementModule)
  },
  {
    path: 'products',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () => import('./products-management/products-management.module').then(m => m.ProductsManagementModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

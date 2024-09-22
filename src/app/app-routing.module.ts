import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  //localhost:4200
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //localhost:4200/login
  { path: 'login', loadChildren:() => import('./login/login.module')
      .then(x => x.LoginModule)},
  //localhost:4200/main
  { path: 'main', loadChildren: ()=>import('./main/main.module').then(x=>x.MainModule), 
    canActivate:[AuthGuard]  },
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

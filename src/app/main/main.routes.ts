import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        //localhost:4200/main
        path: '', component: MainComponent, children: [
            //localhost:4200/main
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            //localhost:4200/main/home
            { path: 'home', loadChildren: ()=>import('./home/home.module').then(x=>x.HomeModule) },
            //localhost:4200/main/user
            { path: 'user', loadChildren: ()=>import('./user/user.module').then(x=>x.UserModule )},

            { path: 'role', loadChildren:()=>import('./role/role.module').then(x=>x.RoleModule) },

            { path: 'function', loadChildren:()=>import('./function/function.module').then(x=>x.FunctionModule) },

            { path: 'product-category', 
                loadChildren:()=> import('./product-category/product-category.module').
                then(x=>x.ProductCategoryModule) },

            { path: 'product', loadChildren:()=> import('./product/product.module')
                .then(x=>x.ProductModule) },



        ]
    }

]
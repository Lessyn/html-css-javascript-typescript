import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { GlobalErrorComponent } from './errors/global-error/global-error.component';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { CapitulosComponent } from './photos/capitulos/capitulos.component';
import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },

    {
        path: 'home',       
        loadChildren: () => import('./home/home.module').then(h => h.HomeModule)
       
    },
   
    {
        path: 'user/:userName',
        pathMatch: 'full',
        component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        },
        data: {
            title:'Timeline'
        }
    
    },

    {
        path: 'capitulos',
        component: CapitulosComponent,
        data:{
            title: 'Capitulos'
        }
    },

    {
        path: 'p/add',
        component: PhotoFormComponent,
        canActivate:[AuthGuard],
        data:{
            title: 'Photo upload'
        }
    },

    {
        path: 'p/:photoId',
        component: PhotoDetailsComponent,
        data: {
            title: 'Photo detail'
        }
        
    },

    {
        path: 'error',
        component: GlobalErrorComponent,
        data: {
            title: 'Error'
        }
    },

    {
        path: 'not-found',
        component: NotFoundComponent,
        data: {
            title: 'not-found'
        }
    },

    {
        path: '**',
        redirectTo: 'Not-Found'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthQuard } from './core/auth/auth.guard';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { SignInComponent } from './home/signin/signin.component';
import { SignUpComponent } from './home/signup/signup.component';
import { CapitulosComponent } from './photos/capitulos/capitulos.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [

    {
        path: '', component: SignInComponent,
        canActivate: [AuthQuard] // implementando o guarda de rotas.
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'user/:userName', component: PhotoListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    },
    {
        path: 'capitulos', component: CapitulosComponent
    },
    {
        path: 'p/add', component: PhotoFormComponent
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
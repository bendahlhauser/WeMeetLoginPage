import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import { MeetingsComponent } from './meetings';
import { CreateGroupComponent } from './creategroup';
import { GroupsComponent } from './groups/groups.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'meetings', component: MeetingsComponent },
    { path: 'creategroup', component: CreateGroupComponent },
    { path: 'groups/:id', component: GroupsComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: true }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class appRoutingModule {}

//export const appRoutingModule = RouterModule.forRoot(routes);
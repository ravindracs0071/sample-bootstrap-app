import { Routes, RouterModule } from "@angular/router";

import { PageHeaderComponent } from './_layout/page-header/page-header.component';
import { PageFooterComponent } from './_layout/page-footer/page-footer.component';
import { PageLayoutComponent } from './_layout/page-layout/page-layout.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
    { 
        path: '',
        component: PageLayoutComponent,
        children: [
            { path: '', component: HomeComponent, pathMatch: 'full' },
            { path: 'about', component: AboutComponent },
            { path: 'test', loadChildren: './common-shared/common-shared.module#CommonSharedModule' },
        ]
    },
    { path: '**', redirectTo: '' }
] ;

export const routing = RouterModule.forRoot(appRoutes);
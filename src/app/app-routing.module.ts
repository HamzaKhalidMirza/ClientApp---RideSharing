import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'starter-guide', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'starter-guide',
    loadChildren: () => import('./components/starter-guide/starter-guide.module').then( m => m.StarterGuidePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./components/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'trips',
    loadChildren: () => import('./components/sidemenu/trips/trips.module').then( m => m.TripsPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./components/sidemenu/wallet/wallet.module').then( m => m.WalletPageModule)
  },
  {
    path: 'discount',
    loadChildren: () => import('./components/sidemenu/discount/discount.module').then( m => m.DiscountPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./components/sidemenu/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./components/sidemenu/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./components/sidemenu/legal/legal.module').then( m => m.LegalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {isDevMode, NgModule} from '@angular/core';
import {Routes, RouterModule, UrlSegment} from '@angular/router';

const routes: Routes = [
  {
    matcher: matcher,
    loadChildren: () => import('./azure-badger/azure-badger.module').then(mod => mod.AzureBadgerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export function matcher(url: UrlSegment[]) {
    if ((isDevMode() && url[0].path === 'azure-badger')
      || window.location.hostname === 'azurebadger.com') {
      return {
        consumed: url,
      };
    }
    return null;
}

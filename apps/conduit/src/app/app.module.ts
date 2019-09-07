import { ApiModule } from '@myng/api';
import { AuthModule } from '@myng/auth';
import { NgrxErrorModule } from '@myng/ngrx-error';
import { NgrxRouterModule } from '@myng/ngrx-router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

@NgModule({
  imports: [
    ApiModule,
    AuthModule,
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: '', loadChildren: () => import('@myng/home/src/lib/home.module').then(m => m.HomeModule) },
        { path: 'article/:slug', loadChildren: () => import('@myng/article/src/lib/article.module').then(m => m.ArticleModule) } ,
        { path: 'settings', loadChildren: () => import('@myng/settings/src/lib/settings.module').then(m => m.SettingsModule) },
        { path: 'editor', loadChildren: () => import('@myng/editor/src/lib/editor.module').then(m => m.EditorModule) },
        { path: 'auth', loadChildren: () => import('@myng/auth/src/lib/auth.module').then(m => m.AuthModule) },
        { path: 'contacts', loadChildren: () => import('@myng/contacts/src/lib/contacts.module').then(m => m.ContactsModule) },
        { path: 'profile/:username', loadChildren: () => import('@myng/profile/src/lib/profile.module').then(m => m.ProfileModule) }
      ],
      {
        initialNavigation: 'enabled',
        useHash: false
      }
    ),
    StoreModule.forRoot({}, { metaReducers: !environment.production ? [storeFreeze] : [] }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    NgrxRouterModule,
    NgrxErrorModule
  ],
  declarations: [AppComponent, FooterComponent, NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

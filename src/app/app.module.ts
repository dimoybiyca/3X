import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from 'src/app/home/home.module';
import { CaesarsModule } from 'src/app/caesars/caesars.module';
import { TopBarModule } from 'src/app/shared/modules/top-bar/top-bar.module';
import { SideBarModule } from 'src/app/shared/modules/side-bar/side-bar.module';
import { CommutativeModule } from 'src/app/commutative/commutative.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    SideBarModule,
    HomeModule,
    CaesarsModule,
    CommutativeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarModule } from 'src/app/shared/top-bar/top-bar.module';
import { SideBarModule } from 'src/app/shared/side-bar/side-bar.module';
import { HomeModule } from 'src/app/home/home.module';
import { CaesarsModule } from 'src/app/caesars/caesars.module';
import { TableComponent } from './caesar/components/table/table.component';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TopBarModule,
    SideBarModule,
    HomeModule,
    CaesarsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { MenuComponent } from './views/menu/menu.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TopCardComponent } from './views/dashboard/top-card/top-card.component';
import { AreaChartComponent } from './views/dashboard/area-chart/area-chart.component';
import { YearlySalesChartComponent } from './views/dashboard/yearly-sales-chart/yearly-sales-chart.component';
import { SocialComponent } from './views/dashboard/social/social.component';
import { DashHeaderComponent } from './views/dashboard/dash-header/dash-header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent,
    TopCardComponent,
    AreaChartComponent,
    YearlySalesChartComponent,
    SocialComponent,
    DashHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

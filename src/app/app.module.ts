import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorksComponent } from './works/works.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { FooterComponent } from './footer/footer.component';
import { AboutsiteComponent } from './aboutsite/aboutsite.component';

import { HttpService } from './service/httpClient.service';

@NgModule({
  declarations: [
    AppComponent,
    WorksComponent,
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    FooterComponent,
    AboutsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

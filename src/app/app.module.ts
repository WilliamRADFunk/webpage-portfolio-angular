import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    NavigationComponent,
    MissionSectionComponent,
    AboutSectionComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

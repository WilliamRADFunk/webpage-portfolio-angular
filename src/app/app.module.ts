import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderContentComponent } from './components/header-content/header-content.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderContentComponent,
    NavigationComponent,
    MissionSectionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { applications } from '../../../assets/base/categories.js';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {
  public activeId: string = '';
  public applications: { html: string; name: string; tags: string[], year: number; }[] = applications;

  constructor() { }

  ngOnInit() {
  }

  public toggleAccordian(e: { panelId: string }): void {
    this.activeId = e.panelId;
    console.log('event', e);
  }

}

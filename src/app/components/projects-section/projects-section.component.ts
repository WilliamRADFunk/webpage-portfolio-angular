import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { applications } from '../../../assets/base/categories.js';
import { jumpTo } from '../../utils/jump-to.js';
import { ProjectDetails } from '../../models/project-details.js';

const INITIAL_TAGS: string = 'game, angular, pixijs';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnDestroy, OnInit {
  /**
   * Subscriptions to unsubscribe from onDestroy
   */
  private readonly _subs: Subscription[] = [];

  public activeId: string = '';
  public filteredApplications: ProjectDetails[] = applications;
  public search: FormControl = new FormControl(INITIAL_TAGS);

  constructor() {}

  /**
   * Triggered when component is destroyed, but before it's officially dead
   * this runs cleanup functionality to protect against misfired queries.
   */
  ngOnDestroy(): void {
    this._subs.forEach(s => s && s.unsubscribe());
    this._subs.length = 0;
  }

  /**
   * Triggered when component is loaded, but before it is viewed.
   */
  ngOnInit() {
    this.filterByTags(INITIAL_TAGS);
    this._subs.push(this.search.valueChanges
      .pipe(debounceTime(500))
      .subscribe(newVal => {
        this.filterByTags(newVal);
      }));
  }

  public filterByTags(value: string): void {
    const splitWords = (value && value.split(',')) || [];
    const matches = [];
    for (const cat of applications) {
      const tags = cat.tags;
      if (!tags.length) {
        continue;
      }
      for (const word of splitWords) {
        if (tags.includes(word.trim())) {
          matches.push(cat);
          break;
        }
      }
    }
    matches.sort((a, b) => {
      if (a.year > b.year) {
        return -1;
      } else {
        return 1;
      }
    });
    console.log(matches);
    this.filteredApplications = matches;
  }

  /**
   * Sets the position of the page to the top of the anchored tag,
   * taking into account the header and navigation bar.
   */
  public jumpTo() {
    jumpTo();
  }

  public toggleAccordian(e: { panelId: string }): void {
    this.activeId = e.panelId;
    console.log('event', e);
  }

  public setPanelToTop(id: string) {
    setTimeout(() => {
      const offset = document.getElementById(id).getBoundingClientRect();
      window.scrollBy(0, offset.top);
      jumpTo();
    }, 100);
  }

}

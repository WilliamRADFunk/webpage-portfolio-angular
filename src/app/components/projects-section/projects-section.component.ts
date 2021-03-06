import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
   * List of jsonified projects.
   */
  private _applications: ProjectDetails[] = [];

  /**
   * Subscriptions to unsubscribe from onDestroy
   */
  private readonly _subs: Subscription[] = [];

  /**
   * Active id of the project panel user last selected.
   */
  public activeId: string = '';

  /**
   * List of jsonified projects with at least one of the user specified tags.
   */
  public filteredApplications: ProjectDetails[] = [];

  /**
   * Form control for the input box that tags search tags from user.
   */
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
  ngOnInit(): void {
    fetch('./assets/base/categories.json')
    .then(response => {
      return response.json();
    })
    .then(cats => {
      this._applications = cats;
      this.filterByTags(INITIAL_TAGS);
      this._subs.push(this.search.valueChanges
        .pipe(debounceTime(500))
        .subscribe(newVal => {
          this.filterByTags(newVal);
        }));
    });
  }

  /**
   * Filters the large jsonified list of projects by user specified search tags and sorts them by year.
   * @param value comman delimited string of tags.
   */
  public filterByTags(value: string): void {
    const splitWords = (value && value.split(',')) || [];
    const matches = [];
    for (const cat of this._applications) {
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
    this.filteredApplications = matches;
  }

  /**
   * Sets the position of the page to the top of the anchored tag,
   * taking into account the header and navigation bar.
   */
  public jumpTo(): void {
    jumpTo();
  }

  /**
   * Responds to click event on a panel, and updates the active panel id.
   * @param the panel clicked event.
   */
  public toggleAccordian(e: { panelId: string }): void {
    this.activeId = e.panelId;
  }

  /**
   * Makes the selected panel rise to the top of the page, just below the navigation bar.
   * @param id of the panel to set position for.
   */
  public setPanelToTop(id: string): void {
    setTimeout(() => {
      const offset = document.getElementById(id).getBoundingClientRect();
      window.scrollBy(0, offset.top);
      jumpTo();
    }, 100);
  }

}

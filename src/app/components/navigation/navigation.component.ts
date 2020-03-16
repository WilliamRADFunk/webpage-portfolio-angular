import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  /**
   * Whether or not to show the dropdown menu
   */
  public showState: boolean;

  constructor() { }

  /**
   *
   */
  public jumpTo() {
    let offset;
    setTimeout(() => {
      if (window.innerWidth > 767) {
        offset = document.getElementById('main-nav').offsetHeight + document.getElementById('main-header').offsetHeight + 32;
        window.scrollBy(0, -offset);
      } else if (575 < window.innerWidth && window.innerWidth <= 767) {
        offset = document.getElementById('main-nav').offsetHeight + document.getElementById('main-header').offsetHeight + 16;
        window.scrollBy(0, -(offset));
      } else {
        offset = document.getElementById('main-nav').offsetHeight + document.getElementById('main-header').offsetHeight + 8;
        window.scrollBy(0, -(offset));
      }
    }, 50);
  }

  /**
   * Solves the collapse of the mobile nav dropdown
   * without illegally accessing the html dom references.
   */
  public mobileCollapseState(): void {
    this.showState = false;
  }

  /**
   * Keeps track of collapsed state in order to apply show: false
   * when user selects option form mobile dropdown van menu.
   */
  public toggleCollapseState(): void {
    setTimeout(() => {
      if (this.showState === undefined) {
        this.showState = true;
      } else {
        this.showState = !this.showState;
      }
    }, 200);
  }

}

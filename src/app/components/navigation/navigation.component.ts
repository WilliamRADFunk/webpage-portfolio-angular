import { Component } from '@angular/core';
import { jumpTo } from 'src/app/utils/jump-to';

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
   * Sets the position of the page to the top of the anchored tag,
   * taking into account the header and navigation bar.
   */
  public jumpTo() {
    jumpTo();
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

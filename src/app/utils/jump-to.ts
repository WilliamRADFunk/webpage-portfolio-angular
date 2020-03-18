/**
 * Sets the position of the page to the top of the anchored tag,
 * taking into account the header and navigation bar.
 */
export function jumpTo() {
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

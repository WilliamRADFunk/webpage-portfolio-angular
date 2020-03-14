import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() content: string;
  @Input() id: string;
  @Input() prefix: string;

  constructor() { }

  ngOnInit() {
  }

}

import { ETheme } from './enums/Etheme.enum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon: string = ETheme.ICON_NIGTH;
  public textTheme: string = ETheme.TEXT_NIGTH;
  constructor() { }

  ngOnInit(): void {
  }

  public toggle() {
    const theme = document.body.classList.toggle('dark-theme');
    if(theme) {
      this.textTheme = ETheme.TEXT_DAY;
      return (this.icon = ETheme.ICON_DAY);
    }
    this.textTheme = ETheme.TEXT_NIGTH;
    return (this.icon = ETheme.ICON_NIGTH);
  }
}

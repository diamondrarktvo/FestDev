import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { lightDark_liste, menu_liste, setting_liste } from './liste_elements';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menu!: { pathSvg_1: string, pathSvg_2?: string, label: string, route: string }[];
  setting!: { pathSvg_1: string, pathSvg_2?: string, label: string, route: string }[];
  lightDark!: { pathSvg: string, label: string }[];
  buttonSidenav!: HTMLElement;
  statusSidebar!: boolean;
  colorSidebar!: 'dark' | 'light';
  langueSidebar!: { key: string, label: string }[];
  currentLang!: { key: string, label: string };
  bodyApp!: HTMLBodyElement;
  headerApp!: HTMLElement;
  sidebarApp!: HTMLElement;
  preloaderApp!: HTMLElement;
  recherheApp!: HTMLElement;
  darkLightApp!: HTMLElement;

  @Output() statusSidebarToEmit = new EventEmitter<{statusSidebar: boolean}>();

  constructor() { }

  private setColor(color: string, background: string): void {
    (this.bodyApp).style.color = color;
    (this.headerApp).style.color = color;
    (this.bodyApp).style.background = background;
    (this.sidebarApp).style.background = background;
    (this.preloaderApp).style.background = background;
  }

  private setHeaderColor(color: string, background: string, shadow: string): void {
    (this.headerApp).style.color = color;
    (this.headerApp).style.background = background;
    (this.headerApp).style.boxShadow = `0px 2px 3px 1px ${shadow}`;
  }

  private setOtherColor(background: string): void {
    (this.recherheApp).style.background = background;
    (this.darkLightApp).style.background = background;
  }

  private setColorListActive(): void {
    if(this.colorSidebar === 'dark') {
      let activeList = <HTMLElement>document.querySelector('.active_light');      
      activeList.classList.add('active_dark');
      activeList = <HTMLElement>document.querySelector('.active_dark');
      activeList.classList.remove('active_light');      
    }
    else {
      let activeList = <HTMLElement>document.querySelector('.active_dark');
      activeList.classList.add('active_light');
      activeList = <HTMLElement>document.querySelector('.active_light');
      activeList.classList.remove('active_dark');
    }
  }

  ngOnInit(): void {
    this.bodyApp = <HTMLBodyElement>document.querySelector('body');
    this.headerApp = <HTMLElement>document.querySelector('header');
    this.sidebarApp = <HTMLElement>document.querySelector('.sidebar');
    this.preloaderApp = <HTMLElement>document.querySelector('#preloader');
    this.recherheApp = <HTMLElement>document.querySelector('.recherche li');
    this.darkLightApp = <HTMLElement>document.querySelector('.dark_light');

    this.menu = menu_liste;
    this.setting = setting_liste;
    this.lightDark = lightDark_liste;
    this.buttonSidenav = <HTMLElement>document.querySelector('#toggle_sidebar svg');

    !localStorage.getItem('statusSidebarDashbord')
      && localStorage.setItem('statusSidebarDashbord', `${true}`);
    this.statusSidebar = localStorage.getItem('statusSidebarDashbord') === 'true';

    !localStorage.getItem('colorDashbord') 
      && localStorage.setItem('colorDashbord', 'light');
    this.colorSidebar = <'dark' | 'light'>localStorage.getItem('colorDashbord');

    this.langueSidebar = [
      {key: 'fr', label: 'français'},
      {key: 'uk', label: 'english'},
      {key: 'ml', label: 'malagasy'}
    ];

    this.currentLang = <{ key: string, label: string }>(this.langueSidebar).find(value => 
      value.key === localStorage.getItem('langDashbord'));

    if(this.colorSidebar === 'light') {
      this.setColor('#3a454b', '#ffffff');
      this.setOtherColor('#f7f7f7');
      this.setHeaderColor('#3a454b', '#ffffff', '#e3dcdc6b');
    }
    else {
      this.setColor('#ffffff', '#3a454b');
      this.setOtherColor('#626973');
      this.setHeaderColor('#ffffff', '#3a454b', '#48414185');
    }
  }

  onToggleSidebar() {
    if(this.statusSidebar) {
      (this.buttonSidenav).style.transform = 'rotate(180deg)';
    }
    else {
      (this.buttonSidenav).style.transform = 'rotate(0deg)';
    }

    this.statusSidebar = !this.statusSidebar;
    localStorage.setItem('statusSidebarDashbord', `${this.statusSidebar}`);
    this.statusSidebarToEmit.emit({statusSidebar: this.statusSidebar});
  }

  onSearch(statusSidebar: boolean) {
    if(!statusSidebar) {
      this.statusSidebar = !this.statusSidebar;
      this.statusSidebarToEmit.emit({statusSidebar: this.statusSidebar});
    }
  }

  onSetColor(color: 'dark' | 'light') {
    if(!this.statusSidebar) {
        if(color === 'light') {
          localStorage.setItem('colorDashbord', 'dark');
          this.colorSidebar = 'dark';
          this.setColor('#ffffff', '#3a454b');
          this.setOtherColor('#626973');
          this.setHeaderColor('#ffffff', '#3a454b', '#48414185');
        }
        else {
          localStorage.setItem('colorDashbord', 'light');
          this.colorSidebar = 'light';
          this.setColor('#3a454b', '#ffffff');
          this.setOtherColor('#f7f7f7');
          this.setHeaderColor('#3a454b', '#ffffff', '#e3dcdc6b');
        }
    }
    else {
      localStorage.setItem('colorDashbord', color);
      this.colorSidebar = color;
      if(this.colorSidebar === 'dark') {
        this.setColor('#ffffff', '#3a454b');
        this.setOtherColor('#626973');
        this.setHeaderColor('#ffffff', '#3a454b', '#48414185');
      }
        
      else {
        this.setColor('#3a454b', '#ffffff');
        this.setOtherColor('#f7f7f7');
        this.setHeaderColor('#3a454b', '#ffffff', '#e3dcdc6b');
      }
    }
    this.setColorListActive();
  }
}

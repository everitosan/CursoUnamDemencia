import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {SectionMenuService} from '../../services/section-menu.service';
import {MenuItem} from '../../models/menu-item';

@Component({
  selector: 'section-menu',
  templateUrl: 'app/components/section-menu/section-menu.html',
  styleUrls: ['app/components/section-menu/section-menu.css']
})
export class SectionMenu {
  @Input('type') menuType: string;
  @Output() onMenuItem = new EventEmitter();

  private founded: boolean = false;

  menuItems: MenuItem[];
  constructor(
    private menuService: SectionMenuService,
    private router: Router
  ) {

  }

  changeRoute(path: string) {
    this.router.navigateByUrl(path, { skipLocationChange: false });
  }

  isItemValid(id: string) {
    if(!this.founded) {
      if (this.menuType == id) {
        this.founded = true;
      }
      return true;
    }
    return false;
  }
  ngOnInit() {
    this.menuService.getMenu()
      .subscribe( menuItems => this.menuItems = menuItems);
  }
}

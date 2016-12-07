import {Component, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SectionMenuService} from '../../services/section-menu.service';
import {MenuItem} from '../../models/menu-item';

@Component({
  selector: 'section-menu',
  templateUrl: 'app/components/section-menu/section-menu.html',
  styleUrls: ['app/components/section-menu/section-menu.css']
})
export class SectionMenu {
  private menuType: string;
  @Output() onMenuItem = new EventEmitter();

  private founded: boolean = false;

  menuItems: MenuItem[];

  constructor(
    private menuService: SectionMenuService,
    private router: Router,
    private route: ActivatedRoute
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
    this.menuType = this.router.url.substring( 1, this.router.url.length );

    this.menuService.getMenu()
      .subscribe( menuItems => {
        let founded = false;
        this.menuItems = <MenuItem[]>menuItems.filter(item => {
          if(!founded) {
            if(this.menuType == item.id) {
              founded = true;
            }
            return true;
          }
          return false;
        });
      });
  }
}

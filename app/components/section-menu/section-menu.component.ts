import {Component, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {SectionMenuService} from '../../services/section-menu.service';
import {MenuItem} from '../../models/menu-item';
import {MenuScrollerComunicator} from '../../services/menu-scroller-connection.service';


@Component({
  selector: 'section-menu',
  templateUrl: 'app/components/section-menu/section-menu.html',
  styleUrls: ['app/components/section-menu/section-menu.css']
})
export class SectionMenu {
  private menuType: string;
  private showNext: boolean = false;
  @Output() onMenuItem = new EventEmitter();

  menuItems: MenuItem[];
  nextItem: MenuItem =  new MenuItem();

  constructor(
    private menuService: SectionMenuService,
    private router: Router,
    private route: ActivatedRoute,
    private communicator: MenuScrollerComunicator
  ) {

  }

  changeRoute(path: string) {
    this.router.navigateByUrl(path, { skipLocationChange: false });
  }


  ngOnInit() {
    this.menuType = this.router.url.substring( 1, this.router.url.length );

    this.fillMenu();

    this.communicator.getIsShownNext().subscribe((isShown: boolean )=> {
      if ( this.nextItem.id != undefined){
        this.showNext = isShown;
      }
    });
  }

  fillMenu() {
    this.menuService.getMenu()
      .subscribe( menuItems => {
        let founded = false;
        let finalIndex;

        this.menuItems = <MenuItem[]>menuItems.filter((item, i) => {
          if(!founded) {
            if(this.menuType == item.id) {
              founded = true;
            }
            finalIndex = i;
            return true;
          }
          return false;
        });
        this.setNext(menuItems[finalIndex+1]);

      });
  }

  setNext(next: MenuItem) {
    if (next != undefined) {
      this.nextItem = next;
    }
  }
}

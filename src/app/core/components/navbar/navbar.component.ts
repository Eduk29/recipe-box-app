import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showNewRecipeButton: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(value => value instanceof NavigationEnd)
      )
      .subscribe((value: NavigationEnd) => {
        this.showNewRecipeButton = !value.url.includes('new');
      });
  }

}

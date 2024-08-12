import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public addPersonButton: boolean = true;
  public backButton: boolean = true;


  constructor(

    private router: Router
    ) {

    }

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if(event.url.includes('/list')){
          this.addPersonButton = true;
          this.backButton = false;
        } else {
          this.addPersonButton = false;
          this.backButton = true;
        }
      }
    });
  }

  getBack() {
    this.router.navigate(['list']);
  }
}

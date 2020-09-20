import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class HeaderComponent implements OnInit {

    location: any;
    navClass: any;
    logo: any;
    navContainer: any;
    FearchHeaderForm:FormGroup;
    constructor(
        private router: Router,
        location: Location,
        private fb: FormBuilder
    ) {
        this.router.events
            .subscribe((event) => {
                if ( event instanceof NavigationEnd ) {
                    this.location = this.router.url;
                    if (this.location == '/'){
                        this.navClass = 'navbar-area';
                        this.navContainer = 'container-fluid';
                        // this.logo = 'assets/img/white-logo.png';
                        this.logo = 'assets/img/logo/WhiteLogo.svg';
                    } else if (this.location == '/machine-learning'){
                        this.navClass = 'navbar-area navbar-style-three';
                        this.navContainer = 'container';
                        // this.logo = 'assets/img/black-logo.png';
                        this.logo = 'assets/img/logo/BlackLogo.svg';
                    } else if (this.location == '/machine-learning-2') {
                        this.navClass = 'navbar-area navbar-style-four';
                        this.navContainer = 'container-fluid';
                        // this.logo = 'assets/img/black-logo.png';
                        this.logo = 'assets/img/logo.BlackLogo.svg';
                    } else {
                        this.navClass = 'navbar-area navbar-style-two';
                        this.navContainer = 'container';
                        // this.logo = 'assets/img/white-logo.png';
                        this.logo = 'assets/img/logo/WhiteLogo.svg';
                    }
                }
            });
    }

    ngOnInit() {
        this.CreateSearchHeaderFormForm();
    }
    searchHeaderForm: FormGroup;
  
  CreateSearchHeaderFormForm() {
    this.searchHeaderForm = this.fb.group({
      search: [''],
    });
  }

}

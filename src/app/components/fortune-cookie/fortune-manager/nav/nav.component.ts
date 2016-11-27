import { Component } from '@angular/core';
import { RouterModule }   from '@angular/router';

@Component({
    selector: 'app-nav',
    template:`
        <nav>
            <a [routerLink]="['/myfortune']" routerLinkActive="active">My Fortune</a>
            <a [routerLink]="['/fortunes']" routerLinkActive="active">Fortunes</a>
          </nav>
    `,
    styles:[`
        nav { color:#cfcfcf; text-align:right; padding:10px; font-size:14px; background-color:#333333; }
        nav a { color: #cfcfcf; border-radius: 17px; display: inline-block; padding: 7px 7px; text-decoration: none; font-weight: 700; }
        /*nav a.active { background-color:transparent; text-decoration:underline;}*/
    `]
})
export class NavComponent {

}
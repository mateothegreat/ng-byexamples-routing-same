import { Component }             from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html',
    styleUrls: [ './test1.component.css' ]
})
export class Test1Component {

    public constructor(private router: Router) {

        this.router.events.subscribe((evt) => {

            if (evt instanceof NavigationEnd) {

                console.log(`${ new Date().toString() }: test1 component routed to`);

            }

        });

    }

}

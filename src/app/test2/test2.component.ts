import { Component }             from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-test2',
    templateUrl: './test2.component.html',
    styleUrls: [ './test2.component.css' ]
})
export class Test2Component {

    public constructor(private router: Router) {

        this.router.events.subscribe((evt) => {

            if (evt instanceof NavigationEnd) {

                console.log(`${ new Date().toString() }: test2 component routed to`);

            }

        });

    }

}

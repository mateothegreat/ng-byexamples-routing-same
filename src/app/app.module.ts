import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }  from '@angular/router';

import { AppComponent }   from './app.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

@NgModule({
    declarations: [

        AppComponent,
        Test1Component,
        Test2Component

    ],
    imports: [

        BrowserModule,
        RouterModule.forRoot([

            {

                path: 'test1',
                component: Test1Component

            }, {

                path: 'test2',
                component: Test2Component

            }

        ], {

            onSameUrlNavigation: 'reload'

        })

    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}

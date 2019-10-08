import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services';
import { User } from './_models';

import { Group } from "./group";
import { GROUPS } from "./tempGroups";
import { Person } from "./person";
import { PEOPLE } from "./people";

import { GroupsService } from './_services/groups.service';


import './_content/app.less';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})
export class AppComponent {
    currentUser: User;

    groups = GROUPS;
    people = PEOPLE;

    selectedGroup: Group;

    onSelect(group: Group): void {
        this.selectedGroup = group;
    }

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
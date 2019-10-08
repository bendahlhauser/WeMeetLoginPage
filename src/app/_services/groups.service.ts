import { Injectable } from '@angular/core';
import { GROUPS } from '../tempGroups';

@Injectable()
export class GroupsService {
    constructor() {}
    getGroups() {
        return GROUPS;
    }
}
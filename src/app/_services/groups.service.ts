import { Injectable } from '@angular/core';
import { GROUPS } from '../group';

@Injectable()
export class GroupsService {
    constructor() {}
    getGroups() {
        return GROUPS;
    }
}
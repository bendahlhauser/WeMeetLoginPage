import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '../group';
@Pipe({
    
    name: 'selectedGroup'
})
export class SelectedGroupPipe implements PipeTransform {
    transform(allGroups: Group[], groupId: number): any {
        return allGroups.filter(p => p.id === groupId);
    }
}
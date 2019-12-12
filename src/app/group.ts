import { Person } from "./person";
import { PEOPLE } from "./people";

export class Group {
    id: number;
    name: string;
    numMembers: number;
    members: Person[];
}

var placeholderPerson: Person = {id: 1, fName: "Placeholder", lName: "Name", email: "place@hol.der", isLeader: false}
var personArr: Person[] = [placeholderPerson];

export const GROUPS: Group[] = [
    {id: 1, name: 'Team Concept', numMembers: 5, members: PEOPLE },
    { id: 2, name: 'IT 390', numMembers: 5, members: personArr  },
    { id: 3, name: 'Another Group', numMembers: 3, members: personArr },
];
import { Person } from "./person";

export class Group {
    id: number;
    name: string;
    numMembers: number;
    members: Person[];
}
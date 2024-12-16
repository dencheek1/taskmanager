export interface DataEntry{
id:string;
text:string;
date: Date;
state: State;
}

export enum State{
    new = 'new',
    active = 'active',
    complete = 'complete',
    default = 'default',
}
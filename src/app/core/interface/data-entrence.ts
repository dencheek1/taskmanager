export interface DataEntry{
id:string;
title?:string;
text:string;
date: Date;
state: State;
}

export enum State{
    new = 'new',
    active = 'active',
    complete = 'complete',
    inProgress = 'inProgress',
    default = 'default',
}
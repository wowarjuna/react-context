export enum ActionType {
    ChangeName
}

export interface ChangeName {
    type: ActionType.ChangeName;
    payload: string;
}

export type TwoActions = ChangeName;
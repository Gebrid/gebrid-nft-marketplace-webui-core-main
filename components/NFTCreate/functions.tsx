import { set } from '../../state';

export declare type Preview = {
  name: string;
  data: string;
  width: number;
  height: number;
};

export declare type File = {
  name: string;
  data: string;
  type: string;
  width: number;
  height: number;
};

export function setStateItem(state: any, action: any, itemName: string) {
  if (action.hasOwnProperty(itemName)) {
    return set(state, itemName, action[itemName]);
  } else {
    return state;
  }
}

export function clearStateItem(state: any, itemName: string) {
  if (state.hasOwnProperty(itemName)) {
    return set(state, itemName, undefined);
  } else {
    return state;
  }
}

export function clearAll(state: any, schema: object) {
  Object.keys(schema).map((key) => {
    state = set(state, key, undefined);
  });
  return state;
}

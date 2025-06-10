import { PersistenceRegistry, ReducerRegistry, set } from '../../state';

import { CLEAR_ETH_ADDRESS, SET_ETH_ADDRESS } from './actionTypes';

const DEFAULT_STATE = {
  ethAddress: '',
};

const STORE_NAME = 'features/profile';

PersistenceRegistry.register(STORE_NAME, {
  ethAddress: true,
});

ReducerRegistry.register(STORE_NAME, (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_ETH_ADDRESS:
      return _setEthAddress(state, action);
    case CLEAR_ETH_ADDRESS:
      return _clearEthAddress(state);

    default:
      return state;
  }
});

function _setEthAddress(state: any, action: any) {
  console.log('action', action);
  return set(state, 'ethAddress', action.ethAddress);
}

function _clearEthAddress(state: any) {
  return set(state, 'ethAddress', '');
}

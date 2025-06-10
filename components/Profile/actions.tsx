import { CLEAR_ETH_ADDRESS, SET_ETH_ADDRESS } from './actionTypes';

export const setEthAddress = (ethAddress: string) => ({
  type: SET_ETH_ADDRESS,
  ethAddress: ethAddress,
});

export const clearEthAddress = () => ({
  type: CLEAR_ETH_ADDRESS,
});

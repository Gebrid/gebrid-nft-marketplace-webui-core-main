import { NFT } from 'types/types';
import instance from './axios';

export const getUserTokens = async (address: string) => {
  const { data } = await instance.get<NFT[]>(`/tokens/${address}`);
  return data;
};

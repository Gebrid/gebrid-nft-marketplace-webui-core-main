import { NFT } from 'types/types';
import instance from './axios';

export const getTokens = async () => {
  const { data } = await instance.get<NFT[]>('/explore');
  return data;
};

export const searchTokens = async (query: string) => {
  const { data } = await instance.get<NFT[]>('/search', {
    params: {
      query
    }
  });
  return data;
};

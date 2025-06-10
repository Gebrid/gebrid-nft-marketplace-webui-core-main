import { NFT } from 'types/types';
import instance from './axios';

export const getToken = async (id: any) => {
  const { data } = await instance.get<NFT[]>(`/explore/${id}`);
  return data;
};

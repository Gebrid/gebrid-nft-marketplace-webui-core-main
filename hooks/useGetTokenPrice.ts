import { useContractRead } from 'wagmi';
import abi from '../abis/addObjectsAbi.json';

export const useGetTokenPrice = (address: string, tokenId: number) => {
  const { data, status, error } = useContractRead({
    address,
    abi,
    functionName: 'getPrice',
    args: [tokenId],
  });

  return { data, status, error };
};

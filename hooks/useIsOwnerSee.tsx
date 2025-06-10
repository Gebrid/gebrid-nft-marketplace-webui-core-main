import { Address, useAccount } from 'wagmi';

export const useIsOwnerSee = (owner: Address) => {
  const { address } = useAccount();

  return address !== owner;
};
